import { useEffect, useRef } from 'react';

const LightRays = ({
    raysOrigin = 'top-center',
    raysColor = '#6278e4',
    raysSpeed = 1,
    lightSpread = 1,
    rayLength = 2,
    mouseInfluence = 0.1,
    noiseAmount = 0
}) => {
    const canvasRef = useRef(null);
    const glRef = useRef(null);
    const programRef = useRef(null);
    const uniformsRef = useRef(null);
    const mouseRef = useRef({ x: 0.5, y: 0.5 });
    const animationRef = useRef(null);

    const vertexShader = `
    attribute vec2 position;
    varying vec2 vUv;
    
    void main() {
        vUv = position * 0.5 + 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

    const fragmentShader = `
    precision highp float;
    
    uniform vec2 uResolution;
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec3 uColor;
    uniform vec2 uOrigin;
    uniform float uSpeed;
    uniform float uSpread;
    uniform float uLength;
    uniform float uNoiseAmount;
    uniform float uMouseInfluence;
    
    varying vec2 vUv;
    
    float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }
    
    float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        
        vec2 u = f * f * (3.0 - 2.0 * f);
        
        return mix(a, b, u.x) +
                (c - a)* u.y * (1.0 - u.x) +
                (d - b) * u.x * u.y;
    }
    
    float fbm(vec2 st) {
        float value = 0.0;
        float amplitude = 0.5;
        
        for (int i = 0; i < 3; i++) {
            value += amplitude * noise(st);
            st *= 2.0;
            amplitude *= 0.5;
        }
        return value;
    }
    
    void main() {
        vec2 st = gl_FragCoord.xy / uResolution.xy;
        
        float aspect = uResolution.x / uResolution.y;
        vec2 uv = st;
        uv.x *= aspect;
        
        vec2 origin = uOrigin;
        origin.x *= aspect;
        
        vec2 mouse = uMouse;
        mouse.x *= aspect;
        
        vec2 delta = uv - origin;
        float dist = length(delta);
        
        float angle = atan(delta.y, delta.x);
        
        float noiseVal = fbm(vec2(angle * uSpread * 5.0, dist - uTime * uSpeed * 0.2));
        float ray = smoothstep(0.1, 0.8, noiseVal + uNoiseAmount * random(uv + uTime * 0.1));
        
        float fade = 1.0 - smoothstep(0.0, uLength * 1.5, dist);
        
        float pulse = 1.0 + 0.1 * sin(uTime * 1.0);
        
        float alpha = ray * fade * pulse;
        alpha = clamp(alpha, 0.0, 1.0);
        
        gl_FragColor = vec4(uColor, alpha * 0.6);
    }
  `;

    const hexToRgb = (hex) => {
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
            parseInt(result[1], 16) / 255,
            parseInt(result[2], 16) / 255,
            parseInt(result[3], 16) / 255
        ] : [1, 1, 1];
    };

    const getOrigin = (origin) => {
        switch (origin) {
            case 'top-center': return [0.5, 1.0];
            case 'top-left': return [0.0, 1.0];
            case 'top-right': return [1.0, 1.0];
            case 'center': return [0.5, 0.5];
            default: return [0.5, 1.0];
        }
    };

    const createShader = (gl, type, source) => {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Shader compile failed:', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    };

    const createProgram = (gl, vsSource, fsSource) => {
        const vShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
        const fShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
        const program = gl.createProgram();
        gl.attachShader(program, vShader);
        gl.attachShader(program, fShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error('Program link failed:', gl.getProgramInfoLog(program));
            return null;
        }
        return program;
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext('webgl', { alpha: true });
        if (!gl) {
            console.error('WebGL not supported');
            return;
        }

        glRef.current = gl;

        // Create program
        const program = createProgram(gl, vertexShader, fragmentShader);
        if (!program) return;
        programRef.current = program;

        // Create buffer
        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([
                -1.0, -1.0,
                1.0, -1.0,
                -1.0, 1.0,
                -1.0, 1.0,
                1.0, -1.0,
                1.0, 1.0
            ]),
            gl.STATIC_DRAW
        );

        const positionLocation = gl.getAttribLocation(program, 'position');
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        // Get uniform locations
        uniformsRef.current = {
            uResolution: gl.getUniformLocation(program, 'uResolution'),
            uTime: gl.getUniformLocation(program, 'uTime'),
            uMouse: gl.getUniformLocation(program, 'uMouse'),
            uColor: gl.getUniformLocation(program, 'uColor'),
            uOrigin: gl.getUniformLocation(program, 'uOrigin'),
            uSpeed: gl.getUniformLocation(program, 'uSpeed'),
            uSpread: gl.getUniformLocation(program, 'uSpread'),
            uLength: gl.getUniformLocation(program, 'uLength'),
            uNoiseAmount: gl.getUniformLocation(program, 'uNoiseAmount'),
            uMouseInfluence: gl.getUniformLocation(program, 'uMouseInfluence')
        };

        // Mouse move handler
        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current.x = (e.clientX - rect.left) / rect.width;
            mouseRef.current.y = 1.0 - (e.clientY - rect.top) / rect.height;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Animation loop
        let startTime = Date.now();
        const animate = () => {
            const time = (Date.now() - startTime) * 0.001;

            // Resize canvas
            const displayWidth = canvas.clientWidth;
            const displayHeight = canvas.clientHeight;
            if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
                canvas.width = displayWidth;
                canvas.height = displayHeight;
                gl.viewport(0, 0, canvas.width, canvas.height);
            }

            gl.useProgram(program);

            // Update uniforms
            gl.uniform2f(uniformsRef.current.uResolution, canvas.width, canvas.height);
            gl.uniform1f(uniformsRef.current.uTime, time);
            gl.uniform2f(uniformsRef.current.uMouse, mouseRef.current.x, mouseRef.current.y);

            const rgb = hexToRgb(raysColor);
            gl.uniform3f(uniformsRef.current.uColor, rgb[0], rgb[1], rgb[2]);

            const origin = getOrigin(raysOrigin);
            gl.uniform2f(uniformsRef.current.uOrigin, origin[0], origin[1]);

            gl.uniform1f(uniformsRef.current.uSpeed, raysSpeed);
            gl.uniform1f(uniformsRef.current.uSpread, lightSpread);
            gl.uniform1f(uniformsRef.current.uLength, rayLength);
            gl.uniform1f(uniformsRef.current.uNoiseAmount, noiseAmount);
            gl.uniform1f(uniformsRef.current.uMouseInfluence, mouseInfluence);

            gl.drawArrays(gl.TRIANGLES, 0, 6);

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [raysOrigin, raysColor, raysSpeed, lightSpread, rayLength, mouseInfluence, noiseAmount]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                opacity: 0.4,
                mixBlendMode: 'screen'
            }}
        />
    );
};

export default LightRays;
