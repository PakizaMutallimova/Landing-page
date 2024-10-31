const articlesData = [
    {
        "id": 1,
        "title": "Importance of loyal customers for businesses",
        "image": "./../../images/articles/article-1.jpg",
        "date": "20 June 2021",
        "author": "John Doe",
        "content": "Loyal customers are the backbone of any business. They not only spend more but also refer friends and family, provide valuable feedback, and are less likely to be swayed by competitors' prices. Building loyalty requires a consistent focus on delivering exceptional customer experiences through quality products, excellent service, personalized interactions, and effective communication. By investing in customer loyalty, businesses can reap significant benefits, including increased profitability, reduced marketing costs, and enhanced brand reputation."
    },
    {
        "id": 2,
        "title": "Miloy's value for businesses",
        "image": "../../../images/articles/article-2.jpg",
        "date": "13 September 2023",
        "author": "Jack Masinga",
        "content": "Miloy offers businesses a powerful platform to nurture and retain loyal customers. Its features enable companies to create personalized loyalty programs, track customer behavior, engage customers through targeted campaigns, and measure loyalty and performance. By leveraging Miloy's capabilities, businesses can build stronger relationships with their customers, drive repeat purchases, and increase customer lifetime value."
    },
    {
        "id": 3,
        "title": "How to be successful in coffeeshop industry",
        "image": "../../../images/articles/article-3.jpg",
        "date": "01 April 2024",
        "author": "Arthur Semen",
        "content": "Success in the competitive coffeeshop industry requires a strategic approach. Key factors include offering a unique selling proposition, prioritizing quality, providing exceptional customer service, leveraging technology, staying updated on trends, and building a strong brand. By focusing on these areas, coffeeshop owners can create a thriving business that attracts and retains loyal customers."
    },
    {
        "id": 4,
        "title": "Miloy is the best solution for your business",
        "image": "../../../images/articles/article-4.jpg",
        "date": "10 December 2023",
        "author": "Elvis Presley",
        "content": "lorem ispum solar puc unas des fatal resutalin. Miloy is the ultimate solution for businesses looking to boost customer loyalty and drive revenue. Its innovative features, user-friendly interface, and customizable options make it easy for companies to create and manage loyalty programs that engage customers and increase sales. With Miloy, businesses can take their customer relationships to the next level and achieve long-term success."
    }
];
const articlesBlog = document.querySelector('.articles-blog');
console.log(articlesBlog);

articlesBlog.innerHTML += articlesData.map((article) => {
    const { id, title, image, date, author, content  } = article;
    return `
    <div class="col-lg-12">
        <div class="article" itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">
            <div class="article-intro-image float-none">
                <href="blog/detail-article.html">
                    <div class="article-intro-image-wrapper"><img src="../images/sampledata/sample-3.jpg" alt=""/>
                    </div>
            <div class="article-body">
                <class="article-header">
                    <h2>
                        <a href="blog/detail-article.html"> Basics to Brewing Cafe Quality Coffee At Home </a>
                    </h2>
                <div class="article-info">
                    <class="createdby" title="Written by: Super User"> <sp itemprop="name">Super User</sp
                    <class="category-name" title="Category: News">
                        <a href="pages.html">News</a>
                    <span class="published" title="Published: 17 August 2020">
                        <time datetime="2020-08-17T17:54:09+00:00"> 17 August 2020 </time>
                    </span>
                    <class="article-introtext">
                    The first step of this assessment will be to collectively create an exhaustive list of processes needing analysis and all systems in use Lorem Ipsum is simply dummy text of
                    the...<div class="readmore">
                    <a href="blog/detail-article.html" itemprop="url" aria-label="Read more &hellip; Basics to Brewing Cafe Quality Coffee At Home"> Read more &hellip; </a>
                </div>
            </div>
        </div>
    </div>`
}).join('');