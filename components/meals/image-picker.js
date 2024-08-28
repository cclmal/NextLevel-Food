"use client"

import classes from './image-picker.module.css'
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function ImagePicker({label, name}) {

    const [pickedImage, setPickedImage] = useState(null)
    const filePickerRef = useRef(); 

    const pickImageHandler = () => {
        filePickerRef.current.click();
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }
        fileReader.readAsDataURL(file);
    }

  return (
    <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet.</p>}                
                {pickedImage && (
                    <Image 
                        src={pickedImage} 
                        alt="Picked Image" 
                        fill 
                    />
                )}           
            </div>
            <input 
                className={classes.input}
                type="file" 
                id="image" 
                name={name} 
                accept="image/png, image/jpeg"
                ref={filePickerRef} 
                onChange={handleImageChange}
            />
            <button 
                onClick={pickImageHandler}
                className={classes.button} 
                type="button"
            >
                Pick Image
            </button>
        </div>
    </div>
  );
}