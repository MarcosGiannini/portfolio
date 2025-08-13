import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
interface ContactProps {
  data: {
    title: { desktop: string; mobile: string };
    description: string;
    form: {
      title: string;
      fields: Array<{ name: string; label: string; type: string }>;
      submitButton: string;
    };
  };
  contactInfo: { email: string; phone?: string };
}

const Contact = ({ data, contactInfo }: ContactProps) => {
  const [state, handleSubmit] = useForm("mldlzykj");
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="border-2 border-black p-8 rounded-lg bg-white shadow-lg relative ">
          <svg
            className="absolute -top-8 -right-8 w-16 h-16 md:w-24 md:h-24"
            viewBox="0 0 151 136"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M64.5679 22.59V45.1802L52.7817 39.2871C46.2993 36.1441 40.2098 33.394 39.0311 33.394C34.5131 33.394 37.6561 39.4836 46.1029 46.9482C52.1924 52.2519 54.3532 55.1985 52.5853 55.7878C51.0138 56.3771 39.424 59.5201 26.4592 62.6631C2.29751 68.5562 -2.61341 71.1099 1.11889 74.8421C2.49394 76.2172 11.9229 75.6279 32.9416 72.4849C49.4423 70.1277 63.3893 68.7526 63.9786 69.3419C64.5679 70.1277 61.2285 77.003 56.7104 84.8604C51.996 92.7179 48.0672 99.7896 47.6744 100.379C47.2815 101.165 48.2637 102.736 49.6387 103.915C51.996 105.879 53.9603 104.897 60.2463 99.3967C64.5679 95.468 68.8895 92.325 69.8717 92.325C70.8539 92.325 72.8182 98.2181 74.3897 105.486C77.7292 122.38 80.0864 127.684 84.408 127.684C89.7118 127.684 90.694 121.594 89.1225 99.0039C88.3367 87.6105 88.3367 78.5744 89.3189 78.5744C90.3011 78.5744 98.1586 81.7174 106.802 85.4497C123.892 92.9143 129.392 93.8965 129.392 89.5749C129.392 85.6462 126.249 82.896 111.123 72.4849C103.855 67.7704 97.9621 63.2524 97.9621  62.6631C97.9621 62.0738 107.98 58.7343 120.159 55.1985C141.964 48.9125 151 44.7873 151 41.2515C151 38.3049 138.624 38.8942 118.981 42.4301C109.552 44.198 101.105 45.1802 100.516 44.3945C99.9265 43.8052 101.302 38.6978 103.659 33.1976C112.498 11.786 106.998 9.82163 93.2476 29.6617C88.1403 37.3228 83.0329 42.823 82.2472 41.8408C81.4614 41.0551 79.3007 33.1976 77.3363 24.5544C73.4075 6.08934 70.8539 -0.000198364 67.1216 -0.000198364C65.1572 -0.000198364 64.5679 5.10715 64.5679 22.59Z"
              fill="#FEF08A"
              stroke="black"
              strokeWidth="4"
            />
          </svg>
          <div className="flex items-center mb-6 space-x-2 md:space-x-0">
            <h2 className="text-3xl md:text-4xl font-bold md:mb-2">
              <span className="hidden md:inline">{data?.title?.desktop}</span>
              <span className="md:hidden"> {data?.title?.mobile}</span>
            </h2>
            <svg
              width="36"
              height="34"
              viewBox="0 0 73 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block md:hidden ml-2 md:ml-0"
              aria-hidden="true"
            >
              <path
                d="M38.6181 8.36637C36.8542 11.1818 39.3811 19.2499 42.9486 22.2228C45.6852 24.4461 47.71 23.4265 48.2431 19.5231C48.8556 15.409 45.841 9.56867 42.4096 8.10076C39.795 6.95345 39.4802 7.01133 38.6181 8.36637Z"
                fill="black"
              />
              <path
                d="M15.0585 10.239C13.2947 13.0544 15.8215 21.1225 19.389 24.0953C22.1256 26.3187 24.1504 25.2991 24.6835 21.3957C25.296 17.2816 22.2814 11.4413 18.8501 9.97335C16.2354 8.82604 15.9206 8.88392 15.0585 10.239Z"
                fill="black"
              />
              <path
                d="M5.08328 33.1238C5.80646 37.5808 14.0815 45.7884 21.4377 49.2808C23.7064 50.4133 27.6199 51.2237 31.0796 51.3722C36.5131 51.5697 37.2844 51.3886 44.3031 48.1562C51.0382 45.0543 52.0789 44.3137 55.3089 40.5618C59.4237 35.7056 63.354 25.2734 62.1062 22.3644C61.0144 19.819 59.4292 21.0716 56.2531 27.3244C52.7367 34.1694 50.7772 36.7266 46.6851 39.6563C42.7745 42.4153 35.4609 44.5643 30.8612 44.3312C25.3965 44.061 15.1222 38.516 9.53555 32.8151C6.69117 29.9447 4.60683 30.0337 5.08328 33.1238Z"
                fill="black"
              />
            </svg>
          </div>
          <p className="text-xl mb-8 text-gray-600">{data?.description}</p>
          {state.succeeded && (
            <div className="mb-10 p-6 border-2 border-black rounded-lg bg-green-100 text-green-800 font-semibold text-center" role="status" aria-live="polite">
              ¡Gracias por tu mensaje! Te responderé pronto.
            </div>
          )}
          <ValidationError prefix="Form" field="form" errors={state.errors} className="mb-6 text-sm text-red-600" />
      {!state.succeeded && (
      <form className="space-y-6 block md:hidden" onSubmit={handleSubmit} noValidate>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-600" />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-red-600" />
            </div>
            <button
              type="submit"
        disabled={state.submitting}
              className="bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white text-lg font-bold px-8 py-4 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all w-full"
            >
        {state.submitting ? 'Enviando...' : data?.form?.submitButton}
            </button>
          </form>
          )}
          <div className="grid-cols-1 md:grid-cols-2 gap-8 hidden md:grid">
            <div className="space-y-6">
              <div className="border-2 border-black p-8 rounded-lg bg-yellow-200">
                <p className="text-xl mb-4">Email</p>
                <h4 className="text-3xl font-bold break-words">
                  <a
                    href={`mailto:${contactInfo?.email}`}
                    className="hover:underline"
                  >
                    {contactInfo?.email}
                  </a>
                </h4>
              </div>
              <div className="flex justify-center items-center h-32">
                <svg
                  width="73"
                  height="69"
                  viewBox="0 0 73 69"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M38.6181 8.36637C36.8542 11.1818 39.3811 19.2499 42.9486 22.2228C45.6852 24.4461 47.71 23.4265 48.2431 19.5231C48.8556 15.409 45.841 9.56867 42.4096 8.10076C39.795 6.95345 39.4802 7.01133 38.6181 8.36637Z" fill="black" />
                  <path d="M15.0585 10.239C13.2947 13.0544 15.8215 21.1225 19.389 24.0953C22.1256 26.3187 24.1504 25.2991 24.6835 21.3957C25.296 17.2816 22.2814 11.4413 18.8501 9.97335C16.2354 8.82604 15.9206 8.88392 15.0585 10.239Z" fill="black" />
                  <path d="M5.08328 33.1238C5.80646 37.5808 14.0815 45.7884 21.4377 49.2808C23.7064 50.4133 27.6199 51.2237 31.0796 51.3722C36.5131 51.5697 37.2844 51.3886 44.3031 48.1562C51.0382 45.0543 52.0789 44.3137 55.3089 40.5618C59.4237 35.7056 63.354 25.2734 62.1062 22.3644C61.0144 19.819 59.4292 21.0716 56.2531 27.3244C52.7367 34.1694 50.7772 36.7266 46.6851 39.6563C42.7745 42.4153 35.4609 44.5643 30.8612 44.3312C25.3965 44.061 15.1222 38.516 9.53555 32.8151C6.69117 29.9447 4.60683 30.0337 5.08328 33.1238Z" fill="black" />
                </svg>
              </div>
            </div>
            <div>
              {!state.succeeded && (
              <form className="bg-white border-2 border-black p-8 rounded-lg" onSubmit={handleSubmit} noValidate>
                <h3 className="text-2xl font-bold mb-6">{data?.form?.title}</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                      <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300" />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-600" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300" />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-red-600" />
                  </div>
                  <button type="submit" disabled={state.submitting} className=" bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white text-lg font-bold px-8 py-3 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-300 w-auto">{state.submitting ? 'Enviando...' : data?.form?.submitButton}</button>
                </div>
              </form>) }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
