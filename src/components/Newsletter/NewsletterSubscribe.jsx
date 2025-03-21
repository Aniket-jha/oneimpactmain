import MailchimpSubscribe from 'react-mailchimp-subscribe';


const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

const SimpleForm = () => <MailchimpSubscribe url={MAILCHIMP_URL}/>
const NewsletterSubscribe = () => {

  

  return (
   <MailchimpSubscribe
    url={MAILCHIMP_URL}
    render={({ subscribe, status, message }) => (
      <div>
        <SimpleForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
      </div>
    )}
  />
  );
};

export default NewsletterSubscribe;