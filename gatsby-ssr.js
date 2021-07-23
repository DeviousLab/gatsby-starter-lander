import React from 'react';
export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
	setPostBodyComponents([
		<script key="formspreeBase" src="https://formspree.io/js/formbutton-v1.min.js" type="text/javascript" aysnc />,
		<script
			key="formspreeWindow"
			dangerouslySetInnerHTML={{
				__html: `
                window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
                formbutton("create", {
                    action: "https://formspree.io/f/xvodbnbd",
                    title: "How can we help?",
                    fields: [
                    { 
                        type: "email", 
                        label: "Email:", 
                        name: "email",
                        required: true,
                        placeholder: "your@email.com"
                    },
                    {
                        type: "textarea",
                        label: "Message:",
                        name: "message",
                        placeholder: "What would you like to discuss?",
                    },
                    { type: "submit" }      
                ],
                styles: {
                    title: {
                        backgroundColor: "#ff7b24"
                    },
                    button: {
                        backgroundColor: "#ff7b24"
                    }
                }
                });`
			}}
		/>
	]);
};
