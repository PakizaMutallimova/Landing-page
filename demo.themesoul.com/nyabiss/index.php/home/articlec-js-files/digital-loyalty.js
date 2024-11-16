const articlesData = [
    {
        "id": 1,
        "title": "Importance of loyal customers for businesses",
        "image": "../../images/articles/article-1.jpg",
        "date": "20 June 2021",
        "author": "John Doe",
        "content": "Loyal customers are the backbone of any business. They not only spend more but also refer friends and family, provide valuable feedback, and are less likely to be swayed by competitors' prices. Building loyalty requires a consistent focus on delivering exceptional customer experiences through quality products, excellent service, personalized interactions, and effective communication. By investing in customer loyalty, businesses can reap significant benefits, including increased profitability, reduced marketing costs, and enhanced brand reputation."
    },
    {
        "id": 2,
        "title": "Miloy's value for businesses",
        "image": "../../images/articles/article-2.jpg",
        "date": "13 September 2023",
        "author": "Jack Masinga",
        "content": "Miloy offers businesses a powerful platform to nurture and retain loyal customers. Its features enable companies to create personalized loyalty programs, track customer behavior, engage customers through targeted campaigns, and measure loyalty and performance. By leveraging Miloy's capabilities, businesses can build stronger relationships with their customers, drive repeat purchases, and increase customer lifetime value."
    },
    {
        "id": 3,
        "title": "How to be successful in coffeeshop industry",
        "image": "../../images/articles/article-3.jpg",
        "date": "01 April 2024",
        "author": "Arthur Semen",
        "content": "Success in the competitive coffeeshop industry requires a strategic approach. Key factors include offering a unique selling proposition, prioritizing quality, providing exceptional customer service, leveraging technology, staying updated on trends, and building a strong brand. By focusing on these areas, coffeeshop owners can create a thriving business that attracts and retains loyal customers."
    },
    {
        "id": 4,
        "title": "Miloy is the best solution for your business",
        "image": "../../images/articles/article-4.jpg",
        "date": "10 December 2023",
        "author": "Elvis Presley",
        "content": "In today's fast-paced and competitive business environment, finding the right tools to streamline operations, engage customers, and improve overall efficiency is essential. Whether you’re running a small business or a large enterprise, success relies on the quality and reliability of your business solutions. That’s where Miloy comes in. Designed with adaptability and growth in mind, Miloy offers a suite of tools tailored to meet the unique needs of businesses across various sectors. Here’s why Miloy is the best solution for your business. Miloy’s platform combines essential features into one cohesive system. From customer loyalty programs to corporate benefits management, Miloy helps you bring everything together, so there’s no need to juggle multiple tools and subscriptions. Having an integrated system saves time, reduces costs, and ensures seamless functionality across all operations."
    }
];

const blogsDigital = document.querySelector('.blogs-digital')

blogsDigital.innerHTML = articlesData.slice(0, 3).map(article =>{
    const { title, image, date, id} = article
    return `
    <div class="mfp-col-xs-12 mfp-col-sm-6 mfp-col-md-12 mfp_default_item">
        <div>
            <a href="../blog/detail-article-${id}.html" class="mfp_thumb_pos_left" itemprop="url">
                <img src="${image}" class="article-image" width="90" height="75" alt="${title}" />
            </a>
            <h4 class="mfp_default_title">
                <a href="../blog/detail-article-${id}.html" itemprop="url"> ${title} </a>
            </h4>
            <span class="mfp_date">${date}</span>
        </div>
    </div>`
}).join("")