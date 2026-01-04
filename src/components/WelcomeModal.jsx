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
    // AUTO-POPUP ON PAGE LOAD
    // ============================================================================

    useEffect(() => {
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
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        } else if (formData.fullName.trim().length < 2) {
            newErrors.fullName = 'Name must be at least 2 characters';
        }

        // Email validation (optional, but if provided must be valid)
        if (formData.email.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                newErrors.email = 'Please enter a valid email address';
            }
        }

        // Mobile Number validation (required, numeric, 10 digits)
        if (!formData.mobile.trim()) {
            newErrors.mobile = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(formData.mobile.trim())) {
            newErrors.mobile = 'Please enter a valid 10-digit mobile number';
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
            // EMAILJS INTEGRATION - Sends form data to your email
            // ========================================================================

            // EmailJS configuration
            // IMPORTANT: Replace these with your actual EmailJS credentials
            // Get them from: https://www.emailjs.com/
            const EMAILJS_SERVICE_ID = 'service_smyayeb';      // Replace with your Service ID
            const EMAILJS_TEMPLATE_ID = 'template_2aihg68';    // Replace with your Template ID
            const EMAILJS_PUBLIC_KEY = 'jDPw_A0RfLJoss9V6';      // Replace with your Public Key

            // Prepare email template parameters
            const templateParams = {
                from_name: formData.fullName,
                from_email: formData.email || 'Not provided',
                mobile: formData.mobile,
                message: formData.message,
                to_name: 'Admin',  // You can customize this
            };

            // Send email using EmailJS
            const response = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );

            console.log('Email sent successfully:', response);

            // Close modal immediately to show the website
            handleClose();

            // Reset form (cleared for potential future submissions)
            setFormData({
                fullName: '',
                email: '',
                mobile: '',
                message: ''
            });

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
            <div className={styles.modalContent}>
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

                        {/* Form */}
                        <form onSubmit={handleSubmit} className={styles.form} noValidate>

                            {/* Full Name Field */}
                            <div className={styles.formGroup}>
                                <label htmlFor="fullName" className={styles.label}>
                                    Full Name <span className={styles.required}>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
                                    placeholder="Enter your full name"
                                    aria-required="true"
                                    aria-invalid={!!errors.fullName}
                                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                                />
                                {errors.fullName && (
                                    <span id="fullName-error" className={styles.errorMessage} role="alert">
                                        {errors.fullName}
                                    </span>
                                )}
                            </div>

                            {/* Email Field */}
                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                                    placeholder="your.email@example.com"
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? 'email-error' : undefined}
                                />
                                {errors.email && (
                                    <span id="email-error" className={styles.errorMessage} role="alert">
                                        {errors.email}
                                    </span>
                                )}
                            </div>

                            {/* Mobile Number Field */}
                            <div className={styles.formGroup}>
                                <label htmlFor="mobile" className={styles.label}>
                                    Mobile Number <span className={styles.required}>*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    className={`${styles.input} ${errors.mobile ? styles.inputError : ''}`}
                                    placeholder="1234567890"
                                    maxLength="10"
                                    pattern="[0-9]{10}"
                                    aria-required="true"
                                    aria-invalid={!!errors.mobile}
                                    aria-describedby={errors.mobile ? 'mobile-error' : undefined}
                                />
                                {errors.mobile && (
                                    <span id="mobile-error" className={styles.errorMessage} role="alert">
                                        {errors.mobile}
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
                                className={styles.submitButton}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className={styles.spinner}></span>
                                        Submitting...
                                    </>
                                ) : (
                                    'Submit'
                                )}
                            </button>
                        </form>

                        {/* Footer Text */}
                        <p className={styles.footerText}>
                            You can close this form anytime by clicking the × button or pressing ESC
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default WelcomeModal;
