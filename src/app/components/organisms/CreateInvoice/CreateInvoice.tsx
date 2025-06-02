"use client";

import { useState, useRef, type ReactElement, ChangeEvent } from "react";
import styles from "./CreateInvoice.module.css";
import Image from "next/image";
import { uploadInvoice } from "@/app/server/uploadInvoice";
import { ToastContainer,toast } from "react-toastify";

export const CreateInvoice = (): ReactElement => {
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);  

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile); 
      const reader = new FileReader();
      reader.onload = (ev) => {
        setPreview(ev.target?.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
      setFile(null);
    }
  };

  const handleFileSave = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file); // ⬅️ Subimos el File original
      const response = await uploadInvoice(formData);
      if(response){
        toast.success("Invoice created",{
            style: {
                background: '#3b3737',
                color: '#fff'
            }
        })
      }
    }
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className={styles.create_invoice}>
        <ToastContainer/>
      <div className={styles.heading_content}>
        <h3 className={styles.title}>Create Invoice</h3>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={inputRef}
          onChange={handleFileChange}
        />
        <div className={styles.controls}>
        <button className={styles.btn_upload} onClick={handleButtonClick}>
          Upload Image
        </button>
        <button className={styles.btn_save} onClick={handleFileSave}>
          Save
        </button>
        </div>
      </div>
      {preview ? (
        <div className={styles.preview}>
          <Image
            src={preview}
            alt="Preview"
            className={styles.preview_image}
            width={300}
            height={200}
            unoptimized
          />
        </div>
      ) : (
        <div className={styles.default}>
            <p>No invoice has been selected</p>
        </div>
      )}
    </div>
  );
};
