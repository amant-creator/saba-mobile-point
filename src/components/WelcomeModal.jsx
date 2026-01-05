import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from './WelcomeModal.module.css';

/**
 * WelcomeModal Component
 * 
 * A modal popup form that appears automatically when a user visits the site.
 * Features:
 * - Auto-popup on page load (first visit only)
 * - Session-based persistence (won't show again in same session)
 * - Form validation with inline error messages
 * - Accessibility features (ESC key support, ARIA labels)
 * - Mobile responsive design
 */
const WelcomeModal = () => {
    // ============================================================================
    // STATE MANAGEMENT
    // ============================================================================

    // Controls whether the modal is visible
    const [isOpen, setIsOpen] = useState(false);

    // Stores form data
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        message: ''
    });

    // Stores validation errors for each field
    const [errors, setErrors] = useState({});

    // Controls success message visibility
    const [showSuccess, setShowSuccess] = useState(false);

    // Controls form submission state
    const [isSubmitting, setIsSubmitting] = useState(false);

    // ============================================================================
    // AUTO-POPUP ON PAGE LOAD & EMAILJS INIT
    // ============================================================================

    useEffect(() => {
        // Initialize EmailJS with your Public Key
        emailjs.init('uMmpB1P1vz_IBlgXf');

        // Check if the modal has been shown before in this session
        const hasSeenModal = sessionStorage.getItem('welcomeModalShown');

        // If not shown before, display the modal after a short delay
        if (!hasSeenModal) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 500); // 500ms delay for better UX

            return () => clearTimeout(timer);
        }
    }, []);

    // ============================================================================
    // KEYBOARD ACCESSIBILITY - ESC KEY SUPPORT
    // ============================================================================

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                handleClose();
            }
        };

        // Add event listener when modal is open
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            // Prevent background scrolling when modal is open
            document.body.style.overflow = 'hidden';
        }

        // Cleanup: Remove event listener and restore scrolling
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // ============================================================================
    // FORM VALIDATION
    // ============================================================================

    /**
     * Validates all form fields
     * @returns {Object} - Object containing field names as keys and error messages as values
     */
    const validateForm = () => {
        const newErrors = {};

        // Full Name validation (required)
        if (!formData.user_name.trim()) {
            newErrors.user_name = 'Full name is required';
        } else if (formData.user_name.trim().length < 2) {
            newErrors.user_name = 'Name must be at least 2 characters';
        }

        // Email validation (optional, but if provided must be valid)
        if (formData.user_email.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.user_email)) {
                newErrors.user_email = 'Please enter a valid email address';
            }
        }

        // Mobile Number validation (required, numeric, 10 digits)
        if (!formData.user_phone.trim()) {
            newErrors.user_phone = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(formData.user_phone.trim())) {
            newErrors.user_phone = 'Please enter a valid 10-digit mobile number';
        }

        // Message validation (required)
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 5) {
            newErrors.message = 'Message must be at least 5 characters';
        }

        return newErrors;
    };

    // ============================================================================
    // FORM HANDLERS
    // ============================================================================

    /**
     * Handles input changes and clears field-specific errors
     */
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Update form data
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    /**
     * Handles form submission
     */
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form
        const newErrors = validateForm();

        // If there are validation errors, display them and prevent submission
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Set submitting state
        setIsSubmitting(true);

        try {
            // ========================================================================
            // EMAILJS INTEGRATION - Exactly matching your logic
            // ========================================================================
            const serviceID = 'default_service';
            const templateID = 'template_7h96a7m';

            // Use sendForm to send data directly from the HTML form element
            await emailjs.sendForm(serviceID, templateID, e.target);

            // Show success message
            setShowSuccess(true);

            // Reset form
            setFormData({
                user_name: '',
                user_email: '',
                user_phone: '',
                message: ''
            });

            // Auto-close modal after 3 seconds
            setTimeout(() => {
                handleClose();
            }, 3000);

        } catch (error) {
            console.error('Email sending error:', error);
            setErrors({
                submit: 'Failed to send message. Please try again or contact us directly.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    /**
     * Handles modal close
     */
    const handleClose = () => {
        setIsOpen(false);
        // Mark modal as shown in session storage
        sessionStorage.setItem('welcomeModalShown', 'true');
    };

    /**
     * Handles backdrop click (close modal when clicking outside)
     */
    const handleBackdropClick = (e) => {
        // Only close if clicking directly on the backdrop, not its children
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    /**
     * Prevents scroll propagation to background when modal content is scrolled
     */
    const handleModalScroll = (e) => {
        e.stopPropagation();
    };

    // ============================================================================
    // RENDER
    // ============================================================================

    // Don't render if modal is not open
    if (!isOpen) return null;

    return (
        <div
            className={styles.modalOverlay}
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                className={styles.modalContent}
                onScroll={handleModalScroll}
                onWheel={handleModalScroll}
            >
                {/* Close Button */}
                <button
                    className={styles.closeButton}
                    onClick={handleClose}
                    aria-label="Close modal"
                    type="button"
                >
                    ✕
                </button>

                {/* Conditional Content: Show either Welcome Form or Thank You Message */}
                {showSuccess ? (
                    // Thank You Message (shown after successful submission)
                    <div className={styles.thankYouContainer}>
                        <div className={styles.thankYouContent}>
                            <div className={styles.thankYouEmoji}>🙏</div>
                            <h2 className={styles.thankYouTitle}>Thank you</h2>
                            <p className={styles.thankYouMessage}>
                                Your message has been received successfully. We'll get back to you soon!
                            </p>
                        </div>
                    </div>
                ) : (
                    // Welcome Message and Form (shown initially)
                    <>
                        {/* Modal Header */}
                        <div className={styles.modalHeader}>
                            <h2 id="modal-title" className={styles.modalTitle}>
                                Welcome to Our Saba Mobile Point
                            </h2>
                            <p className={styles.modalSubtitle}>
                                We'd love to hear from you. Please fill out this form to get started.
                            </p>
                        </div>

                        {/* Form - with ID matching your logic if needed, though e.target is used */}
                        <form id="form" onSubmit={handleSubmit} className={styles.form} noValidate>

                            {/* Full Name Field */}
                            <div className={styles.formGroup}>
                                <label htmlFor="user_name" className={styles.label}>
                                    Full Name <span className={styles.required}>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="user_name"
                                    name="user_name"
                                    value={formData.user_name}
                                    onChange={handleInputChange}
                                    className={`${styles.input} ${errors.user_name ? styles.inputError : ''}`}
                                    placeholder="Enter your full name"
                                    aria-required="true"
                                    aria-invalid={!!errors.user_name}
                                    aria-describedby={errors.user_name ? 'user_name-error' : undefined}
                                />
                                {errors.user_name && (
                                    <span id="user_name-error" className={styles.errorMessage} role="alert">
                                        {errors.user_name}
                                    </span>
                                )}
                            </div>

                            {/* Email Field */}
                            <div className={styles.formGroup}>
                                <label htmlFor="user_email" className={styles.label}>
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="user_email"
                                    name="user_email"
                                    value={formData.user_email}
                                    onChange={handleInputChange}
                                    className={`${styles.input} ${errors.user_email ? styles.inputError : ''}`}
                                    placeholder="your.email@example.com"
                                    aria-invalid={!!errors.user_email}
                                    aria-describedby={errors.user_email ? 'user_email-error' : undefined}
                                />
                                {errors.user_email && (
                                    <span id="user_email-error" className={styles.errorMessage} role="alert">
                                        {errors.user_email}
                                    </span>
                                )}
                            </div>

                            {/* Mobile Number Field */}
                            <div className={styles.formGroup}>
                                <label htmlFor="user_phone" className={styles.label}>
                                    Mobile Number <span className={styles.required}>*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="user_phone"
                                    name="user_phone"
                                    value={formData.user_phone}
                                    onChange={handleInputChange}
                                    className={`${styles.input} ${errors.user_phone ? styles.inputError : ''}`}
                                    placeholder="1234567890"
                                    maxLength="10"
                                    pattern="[0-9]{10}"
                                    aria-required="true"
                                    aria-invalid={!!errors.user_phone}
                                    aria-describedby={errors.user_phone ? 'user_phone-error' : undefined}
                                />
                                {errors.user_phone && (
                                    <span id="user_phone-error" className={styles.errorMessage} role="alert">
                                        {errors.user_phone}
                                    </span>
                                )}
                            </div>

                            {/* Message Field */}
                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>
                                    Message <span className={styles.required}>*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                                    placeholder="Tell us how we can help you..."
                                    rows="4"
                                    aria-required="true"
                                    aria-invalid={!!errors.message}
                                    aria-describedby={errors.message ? 'message-error' : undefined}
                                />
                                {errors.message && (
                                    <span id="message-error" className={styles.errorMessage} role="alert">
                                        {errors.message}
                                    </span>
                                )}
                            </div>

                            {/* Submit Error */}
                            {errors.submit && (
                                <div className={styles.submitError} role="alert">
                                    {errors.submit}
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                id="button"
                                className={styles.submitButton}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className={styles.spinner}></span>
                                        Sending...
                                    </>
                                ) : (
                                    'Send Email'
                                )}
                            </button>
                        </form>

                        {/* Footer Text */}
                        {/* <p className={styles.footerText}>
                            You can close this form anytime by clicking the × button or pressing ESC
                        </p> */}
                    </>
                )}
            </div>
        </div>
    );
};

export default WelcomeModal;
