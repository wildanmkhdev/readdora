import React, { useState } from "react";
import Stepper, { Step } from "../../Reactbits/Stepper/Stepper";

const CommentForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [category, setCategory] = useState(""); // New state for category
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container mx-auto max-w-3xl rounded-lg bg-gray-900 p-6 text-white">
      <h2 className="mb-8 text-center text-3xl font-bold lg:text-4xl">
        Contact
      </h2>
      <Stepper
        initialStep={1}
        onStepChange={(step) => {
          console.log("Current Step:", step);
        }}
        onFinalStepCompleted={() => {
          console.log("All steps completed!");
          setSubmitted(true);
        }}
        backButtonText="Back"
        nextButtonText="Next"
      >
        <Step>
          <div className="step-container">
            <h2 className="step-title mb-2 text-xl font-bold">
              Step 1: Your Name
            </h2>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white focus:outline-none"
            />
          </div>
        </Step>

        <Step>
          <div className="step-container">
            <h2 className="step-title mb-2 text-xl font-bold">
              Step 2: Your Email
            </h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white focus:outline-none"
            />
          </div>
        </Step>

        <Step>
          <div className="step-container">
            <h2 className="step-title mb-2 text-xl font-bold">
              Step 3: Your Feedback
            </h2>
            <textarea
              placeholder="Write your feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={4}
              className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white focus:outline-none"
            />
          </div>
        </Step>

        <Step>
          <div className="step-container">
            <h2 className="step-title mb-2 text-xl font-bold">
              Step 4: Category of Message
            </h2>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white focus:outline-none"
            >
              <option value="">Select Category</option>
              <option value="General">General</option>
              <option value="Support">Support</option>
              <option value="Feedback">Feedback</option>
              <option value="Inquiry">Inquiry</option>
            </select>
          </div>
        </Step>

        <Step>
          <div>
            <h2 className="mb-2 text-xl font-bold">Review</h2>
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Feedback:</strong> {feedback}
            </p>
            <p>
              <strong>Category:</strong> {category}
            </p>
            <p className="mt-4 text-green-400">
              Click "Next" to submit your feedback.
            </p>
          </div>
        </Step>
      </Stepper>
      {submitted && (
        <div>
          <h2 className="mb-2 text-xl font-bold">Thank You!</h2>
          <p className="text-green-400">
            Your feedback has been submitted. We appreciate it!
          </p>
        </div>
      )}
    </div>
  );
};

export default CommentForm;
