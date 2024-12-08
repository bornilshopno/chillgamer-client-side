import image from "../assets/faq.jpg"

const Faqs = () => {
    return (<>
    <h2 className="text-center text-2xl md:text-5xl font-bold py-5 md:py-10 border-2 border-x-white border-y-black rounded-lg w-2/3 md:w-1/2 mx-auto mt-5">FAQ: Frequently Asked Questions</h2>
    <h3 className="px-5 lg:px-20 pt-5 md:pt-12 text-white">Welcome to DiscountPro.com, your premier destination for saving money while shopping online or in-store! Our dedicated team of savings experts works tirelessly to bring you the latest discount codes, exclusive deals, and printable coupons from over 1500 stores. Whether you're shopping for groceries, clothing, electronics, or more, DiscountPro.com is here to help you stretch your budget further. Explore our comprehensive FAQ below to learn how to make the most of your savings experience</h3>
    
    <div className="flex flex-col md:flex-row gap-5 mt-10 ">
            <div className="md:w-1/2">
                <img src={image} alt="" />
            </div>
            <div className="md:w-1/2 my-auto">
            
            <div className="collapse collapse-plus bg-base-200 mb-1">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">How can I share my own game reviews on this platform?</div>
                <div className="collapse-content">
                    <p>You can share your reviews by signing up for an account and logging in. Once authenticated, you’ll have access to the review submission section, where you can rate games, write reviews, and even edit or delete your posts later.</p>
                </div>
            </div>
                <div className="collapse collapse-plus bg-base-200 mb-1">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Are there any guidelines for writing reviews?</div>
                    <div className="collapse-content">
                        <p>Yes! We encourage users to keep their reviews honest, respectful, and focused on the game’s features like gameplay, graphics, and storyline. Avoid inappropriate language, spoilers, or personal attacks to ensure a friendly experience for everyone.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200 mb-1">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">How can I manage my account and reviews?</div>
                    <div className="collapse-content">
                        <p>Once registered, you will have credentials to access your account and your reviewes will be avaliable in My Reviews section. Here, you can edit or delete your reviews, update your profile details, and view your activity history.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200 mb-1">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Can I explore game reviews without creating an account?</div>
                    <div className="collapse-content">
                        <p>Absolutely! You can browse reviews and ratings without signing up. However, creating an account unlocks additional features like posting your own reviews, rating games, and interacting with other users.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200 mb-1">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">How are game reviews organized on this platform?</div>
                    <div className="collapse-content">
                        <p>Game reviews are organized by genre, publication date and user ratings. You can use our search and filter options to easily find reviews for the games you’re interested in. Popular and highly rated games are highlighted on the homepage.

</p>
                    </div>
                </div>
                
                </div>
        </div>
    </>
        
    );
};

export default Faqs;