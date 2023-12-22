import React, {useState} from 'react';
import Footer from "./Footer";

const MailMeComponent = () => {
    const [senderName, setSenderName] = useState('');
    const [senderEmail, setSenderEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const emailAddress = 'amamjesse@gmail.com';
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Replace 'your-email@example.com' with your actual email address
        const emailAddress = 'amamjesse@gmail.com';

        // Construct the mailto URL
        const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${senderName}\nEmail: ${senderEmail}\n\n${message}`)}`;

        // Open the default email client with the pre-filled email
        window.open(mailtoUrl, '_blank');
    };

    return (
        <div className="h-3/4">
            <div className="mb-8">
                <h2 className="my-4 text-black font-bold text-lg">Contact Me</h2>

                <form onSubmit={handleFormSubmit}>
                    <div className="flex flex-col sm:flex-row items-start justify-items-start">
                        <div className="mr-6  w-full sm:w-1/2">
                            <h3 className="font-semibold">Name</h3>
                            <input
                                className=" border-b border-gray-400 p-2 w-full focus:border outline-none placeholder:text-xs"
                                type="text"
                                placeholder="Your Name"
                                value={senderName}
                                onChange={(e) => setSenderName(e.target.value)}
                                required
                            />
                        </div>
                        <div className=" w-full sm:w-1/2">
                            <h3 className="font-semibold text-gray-700">Email</h3>
                            <input
                                className=" border-b border-gray-400 p-2  w-full focus:border outline-none placeholder:text-xs"
                                type="email"
                                placeholder="Your Email"
                                value={senderEmail}
                                onChange={(e) => setSenderEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <br/>
                    <div>
                        <h3 className="font-semibold text-gray-700">Subject</h3>
                        <input
                            className=" border-b border-gray-400 p-2 w-full focus:border outline-none"
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </div>
                    <br/>
                    <div>
                        <h3 className="font-semibold text-gray-700">Message</h3>
                        <textarea
                            className=" border border-gray-300 p-2  w-full focus:border outline-none resize-none "
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <br/>
                    <button type="submit"
                            className="bg-gray-200 px-10 py-4"
                    >Send Message
                    </button>
                    <br/>

                </form>

            </div>

        </div>
    );
};

export default MailMeComponent;
