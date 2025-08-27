"use client";

import { useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { Box, Button, Modal } from "@mui/material";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";


interface ReviewData {
    firstName: string;
    lastName: string;
    email?: string;
    image: string | null;
    stars: number;
    experience: string;
}
interface ReviewModalProps {
    setReviewData: (newReview: ReviewData) => void;
}
const ReviewModal: React.FC<ReviewModalProps> = ({ setReviewData }) => {
    const [open, setOpen] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [photos, setPhotos] = useState<File[]>([]);
    const [reviewText, setReviewText] = useState("");
    const [user, setUser] = useState({ firstName: "", lastName: "", email: "" });

    const handleNext = () => setActiveStep((prev) => prev + 1);
    const handleBack = () => setActiveStep((prev) => prev - 1);

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) setPhotos(Array.from(e.target.files));
    };

const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
};

    const handleDone = async () => {
        let uploadedImageUrl = "";
        if (photos[0]) {
            const formData = new FormData();
            formData.append("image", photos[0]);

            const uploadRes = await fetch("http://localhost:3001/api/upload", {
                method: "POST",
                body: formData,
            });
            const uploadData = await uploadRes.json();
            uploadedImageUrl = uploadData.url;
        }
        try {

            const res = await fetch("http://localhost:3001/api/reviews", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    stars: rating,
                    experience: reviewText,
                    image: uploadedImageUrl
                })
            });

            const result = await res.json();

            if (!res.ok) throw new Error(result.error || "Something went wrong");

            toast.success("Your review was submitted!");


            setReviewData({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                stars: rating,
                experience: reviewText,
                image: photos[0] ? URL.createObjectURL(photos[0]) : "",
            });

            setOpen(false);
            setActiveStep(0);
            setRating(0);
            setHoverRating(0);
            setPhotos([]);
            setReviewText("");
            setUser({ firstName: "", lastName: "", email: "" });
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("Failed to send review.");
            }
        }
    };


    return (
        <>
            <Button
                sx={{
                    borderColor: "#ccc",
                    color: "black",
                    textTransform: "none",
                    '&::first-letter': { textTransform: 'uppercase' },
                    fontSize: "16px",
                    fontFamily: "primary-font",
                    '&:hover': {
                        backgroundColor: '#e51515',
                        color: 'white',
                        borderColor: '#e51515',
                    },
                }}
                variant="outlined"
                onClick={() => setOpen(true)}
            >
                Write a review
            </Button>


            <AnimatePresence  mode="wait">
                {open && (
                    <Modal open={open} onClose={() => setOpen(false)}>
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <Box
                                sx={{
                                    position: "absolute" as const,
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: 800,
                                    height: 500,
                                    bgcolor: "background.paper",
                                    boxShadow: 24,
                                    borderRadius: 2,
                                    p: 4,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    overflowY: "auto",
                                }}
                            >
                                <AnimatePresence >
                                    {activeStep === 0 && (
                                        <motion.div
                                            key="step0"
                                            variants={stepVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            transition={{ duration: 0.3 }}
                                        >
                                            <h2 className="text-[22px] text-center mb-10">
                                                How would you rate this item?
                                            </h2>
                                            <div className="flex flex-col items-center gap-2">
                                                <div className="flex gap-2 text-5xl text-[#EBBF20]">
                                                    {[1, 2, 3, 4, 5].map((i) => (
                                                        <IoIosStarOutline
                                                            key={i}
                                                            className={`cursor-pointer transition-transform duration-150 ${(hoverRating || rating) >= i ? "fill-yellow-400 scale-125" : ""
                                                                }`}
                                                            onClick={() => {
                                                                setRating(i);
                                                                setActiveStep(1);
                                                            }}
                                                            onMouseEnter={() => setHoverRating(i)}
                                                            onMouseLeave={() => setHoverRating(0)}
                                                        />
                                                    ))}
                                                </div>
                                                <div className="flex justify-between pt-1 secondary-font text-[#000000] w-full px-4 text-[15px]">
                                                    <span>Dislike it</span>
                                                    <span>Love it!</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeStep === 1 && (
                                        <motion.div
                                            key="step1"
                                            variants={stepVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="flex flex-col items-center">
                                                <h2 className="text-[27px] font-semibold secondary-font">
                                                    Show it off
                                                </h2>
                                                <p className="text-[18px] text-[#000000]">
                                                    Wed love to see it in action!
                                                </p>
                                            </div>

                                            <div className="mt-6 border rounded-lg p-6 mx-auto text-center max-w-md">
                                                <p className="text-[18px] font-semibold mb-4">
                                                    Get 15% off your next purchase!
                                                </p>
                                                <label htmlFor="photo-upload">
                                                    <div className="bg-black text-white px-6 py-3 rounded-lg cursor-pointer flex items-center justify-center gap-2">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                                                            />
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M3 15l4-4a3 3 0 014 0l3 3 4-4a3 3 0 014 0v6H3v-1z"
                                                            />
                                                        </svg>
                                                        <span className="font-medium">Add photos</span>
                                                    </div>
                                                </label>
                                                <input
                                                    id="photo-upload"
                                                    type="file"
                                                    multiple
                                                    onChange={handlePhotoUpload}
                                                    className="hidden"
                                                />
                                                <div className="flex gap-2 flex-wrap mt-4 justify-center">
                                                    {photos.map((photo, idx) => (
                                                        <Image
                                                            key={idx}
                                                            src={URL.createObjectURL(photo)}
                                                            alt={`preview-${idx}`}
                                                            className="w-20 h-20 rounded border object-cover"
                                                            width={80}
                                                            height={80}
                                                        />
                                                    ))}
                                                </div>
                                            </div>

                                            <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
                                                <button
                                                    className="flex items-center gap-2 text-black font-medium"
                                                    onClick={handleBack}
                                                >
                                                    <FaArrowLeft /> Back
                                                </button>

                                                <Button
                                                    sx={{
                                                        backgroundColor: "black",
                                                        color: "white",
                                                        "&:hover": { backgroundColor: "#333" },
                                                        borderRadius: "12px",
                                                    }}
                                                    variant="contained"
                                                    onClick={handleNext}
                                                >
                                                    Next
                                                </Button>
                                            </Box>
                                        </motion.div>
                                    )}

                                   
                                    {activeStep === 2 && (
                                        <motion.div
                                            key="step2"
                                            variants={stepVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            transition={{ duration: 0.3 }}
                                        >
                                            <h2 className="text-[30px] text-center font-medium mb-6">Tell us more!</h2>
                                            <textarea
                                                className="border-1 placeholder:text-[18px] font-medium p-3 outline-none rounded-lg w-[460px] h-[250px]"
                                                placeholder="Share your experience"
                                                value={reviewText}
                                                onChange={(e) => setReviewText(e.target.value)}
                                            />
                                            <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
                                                <button
                                                    className="flex items-center gap-2 text-black font-medium"
                                                    onClick={handleBack}
                                                >
                                                    <FaArrowLeft /> Back
                                                </button>
                                                <Button
                                                    sx={{
                                                        backgroundColor: "black",
                                                        color: "white",
                                                        "&:hover": { backgroundColor: "#333" },
                                                        borderRadius: "12px",
                                                    }}
                                                    variant="contained"
                                                    onClick={handleNext}
                                                >
                                                    Next
                                                </Button>
                                            </Box>
                                        </motion.div>
                                    )}

                                  
                                    {activeStep === 3 && (
                                        <motion.div
                                            key="step3"
                                            variants={stepVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="mt-6 w-full max-w-[600px] mx-auto text-center">
                                                <h2 className="text-2xl font-bold mb-8">About you</h2>
                                                <div className="flex flex-col items-start mb-4">
                                                    <label className="text-sm font-medium mb-1">
                                                        Email <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="email"
                                                        value={user.email}
                                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                                        className="w-full border rounded-lg px-3 py-2 focus:outline-none"
                                                    />
                                                </div>
                                                <div className="flex gap-4 mb-4">
                                                    <div className="flex flex-col items-start w-1/2">
                                                        <label className="text-sm font-medium mb-1">First name</label>
                                                        <input
                                                            type="text"
                                                            value={user.firstName}
                                                            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                                                            className="w-full border rounded-lg px-3 py-2 focus:outline-none"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col items-start w-1/2">
                                                        <label className="text-sm font-medium mb-1">Last name</label>
                                                        <input
                                                            type="text"
                                                            value={user.lastName}
                                                            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                                                            className="w-full border rounded-lg px-3 py-2 focus:outline-none"
                                                        />
                                                    </div>
                                                </div>
                                                <p className="text-sm text-gray-600 leading-snug mb-8">
                                                    By submitting, I acknowledge the{" "}
                                                    <a href="#" className="underline">Terms of Service</a> and{" "}
                                                    <a href="#" className="underline">Privacy Policy</a> and that my review will be publicly posted and shared online
                                                </p>
                                                <div className="flex justify-between items-center">
                                                    <button
                                                        className="flex items-center gap-2 text-black font-medium"
                                                        onClick={handleBack}
                                                    >
                                                        <FaArrowLeft /> Back
                                                    </button>
                                                    <button
                                                        className="bg-black text-white px-6 py-2 rounded-lg font-semibold"
                                                        onClick={handleDone}
                                                    >
                                                        Done
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </Box>
                        </motion.div>
                    </Modal>
                )}
            </AnimatePresence>
        </>
    );
};

export default ReviewModal;
