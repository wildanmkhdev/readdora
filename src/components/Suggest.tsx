import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

const Suggest = () => {
  return (
    <div className="container mx-auto max-w-full px-4 sm:px-6 lg:px-8">
      <h2 className="sm:text-1xl mb-8 text-center text-2xl font-bold text-white lg:text-4xl">
        Frequently Asked Questions (FAQ)
      </h2>
      <Accordion collapseAll>
        <AccordionPanel>
          <AccordionTitle>What is Readoora?</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-sm text-gray-500 sm:text-base dark:text-gray-400">
              Readoora is a modern platform where you can find and purchase
              ebooks easily. Simply click on the book you want, complete the
              payment, and start reading your ebook instantly.
            </p>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel>
          <AccordionTitle>How do I buy an ebook on Readoora?</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-sm text-gray-500 sm:text-base dark:text-gray-400">
              To buy an ebook, select the book you wish to purchase, click
              "Buy," and proceed to the payment page to complete your
              transaction.
            </p>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel>
          <AccordionTitle>Can I download the ebooks I purchase?</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-sm text-gray-500 sm:text-base dark:text-gray-400">
              Most ebooks on Readoora can be read online. Some may be available
              for download, depending on the publisher’s policy.
            </p>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel>
          <AccordionTitle>How can I access the ebook I bought?</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-sm text-gray-500 sm:text-base dark:text-gray-400">
              After completing your purchase, the ebook will be available in
              your "My Library" section, and you can read it at any time.
            </p>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel>
          <AccordionTitle>
            Is there a time limit to read my purchased ebook?
          </AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-sm text-gray-500 sm:text-base dark:text-gray-400">
              No, there is no time limit. Once you've purchased an ebook, you
              can access it anytime as long as your account remains active.
            </p>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel>
          <AccordionTitle>How do I contact customer support?</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-sm text-gray-500 sm:text-base dark:text-gray-400">
              If you need assistance, you can contact customer support by
              emailing us at [email@example.com] or using the live chat feature
              on the website.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  );
};

export default Suggest;
