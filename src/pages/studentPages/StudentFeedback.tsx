import React, { useState } from "react";
import { Star, Send } from "lucide-react";
import { courses } from "../../data/mockData";
import Dropdown from "../../components/Dropdown";
import Button from "../../components/baseComponents/Button";
import BaseHeader from "../../components/BaseHeader";

const StudentFeedback: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = React.useState<string | number>(
    "",
  );
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    console.log({ selectedCourse, rating, feedback });
    e.preventDefault();
    if (selectedCourse && rating > 0 && feedback.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSelectedCourse("");
        setRating(0);
        setFeedback("");
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div>
      <BaseHeader
        heading="Feedback"
        text="Share your thoughts and help us improve"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-sm shadow-sm border border-ui-hover p-4">
          <h2 className="text-xl font-bold text-text-main mb-4">
            Course Feedback
          </h2>
          <form onSubmit={handleSubmit}>
            <Dropdown
              options={courses.map((course) => ({
                label: course.title,
                value: course.id,
              }))}
              value={selectedCourse}
              onChange={setSelectedCourse}
              placeholder="Choose a course"
              className="w-full mb-4 outline-0 border-2 border-ui-border "
            />

            <div>
              <label className="block text-md font-medium text-text-muted mb-2">
                Rating
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Button
                    key={star}
                    onClick={() => setRating(star)}
                    className={`p-2 rounded-sm transition-colors ${
                      star <= rating
                        ? "text-yellow-500"
                        : "text-gray-300 hover:text-yellow-400"
                    }`}
                    startIcon={
                      <Star
                        size={32}
                        fill={star <= rating ? "currentColor" : "none"}
                      />
                    }
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="block text-md font-medium text-text-muted my-2">
                Your Feedback
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={6}
                className="w-full px-4 py-2 border-2 text-text-main border-ui-border rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Share your thoughts about the course, instructor, materials, or anything else..."
                required
              />
              <Button
                text="Submit Feedback"
                type="submit"
                className="w-full bg-primary py-2 rounded-sm text-white"
              />
            </div>
          </form>
        </div>
        <div className="space-y-6">
          <div className="bg-linear-to-br from-primary to-primary/90 rounded-sm p-6 text-white shadow-lg">
            <h3 className="text-lg font-bold mb-2">
              Why Your Feedback Matters
            </h3>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-white mt-0.5">•</span>
                <span>
                  Helps instructors improve course content and delivery
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-0.5">•</span>
                <span>Shapes the future of educational programs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-0.5">•</span>
                <span>Ensures your voice is heard in curriculum decisions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-0.5">•</span>
                <span>
                  Benefits future students with better learning experiences
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFeedback;
