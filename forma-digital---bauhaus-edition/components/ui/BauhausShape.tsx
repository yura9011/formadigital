import React from 'react';
import { motion } from 'framer-motion';

interface BauhausShapeProps {
  type: 'circle' | 'square' | 'triangle' | 'semicircle' | 'quartercircle';
  color: string;
  size: number;
  className?: string;
  rotation?: number;
  delay?: number;
}

const BauhausShape: React.FC<BauhausShapeProps> = ({ 
  type, 
  color, 
  size, 
  className = '', 
  rotation = 0,
  delay = 0 
}) => {
  const style = {
    width: size,
    height: size,
    backgroundColor: color,
  };

  const variants = {
    hidden: { opacity: 0, scale: 0, rotate: rotation - 45 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: rotation,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        delay: delay
      }
    }
  };

  const getShapeStyle = () => {
    switch (type) {
      case 'circle':
        return { ...style, borderRadius: '50%' };
      case 'square':
        return { ...style, borderRadius: '0%' };
      case 'triangle':
        return {
          width: 0,
          height: 0,
          backgroundColor: 'transparent',
          borderLeft: `${size / 2}px solid transparent`,
          borderRight: `${size / 2}px solid transparent`,
          borderBottom: `${size}px solid ${color}`,
        };
      case 'semicircle':
        return {
          ...style,
          height: size / 2,
          borderTopLeftRadius: size,
          borderTopRightRadius: size,
        };
      case 'quartercircle':
         return {
            ...style,
            borderTopRightRadius: size
         };
      default:
        return style;
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`absolute ${className}`}
      style={getShapeStyle()}
    />
  );
};

export default BauhausShape;