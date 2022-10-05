//This file is only for practise DO NOt make any thing here 
var navBar = {
    Home: 'index.html',
    Profile: 'profile.html',
    Friend: 'friend.html',
    Page: 'page.html'
}

//To Create a new post, just add a new object in the array Below.
//In real life these data might come fron server
var privacyIconPublic = "text-sm fa fa-globe-asia"
var privacyIconFriend = "text-sm fa fa-users"
var posts = [
    {
        author: 'Md ABC Islam',
        profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmL1pgLh3OLNe7Bi9VjDt--qhoqcjG5g5Omw&usqp=CAU", 
        publishTime: "20h Ago",
        postText: "Lorem ipag home the i alon year ago took the road the use voice chat in a clear sky and ",
        imageLink: "/jr-korpa-9XngoIpxcEo-unsplash.jpg",
        privacyState : "Public",
        privacyIndecator: privacyIconPublic
    },
    {
        author: 'Mrs Jomila Akhter',
        profilePicture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS3pGYrKkVyA7Zb_3W2xmcUftXYmbHOJ8Y-Q&usqp=CAU",
        publishTime: "10h Ago",
        postText: "Lorem ipag kaliind home the i alon year ago took the road the use voice chat in a clear sky and ",
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT86d41VO2ke3pDmUaymkrRoC5ABdkRjpt3KQ&usqp=CAU",
        privacyState: 'Friends',
        privacyIndecator : privacyIconFriend
    },
    {
        author: 'Md Johirul Islam',
        profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw0t6wiS4qgBonM2UvULuRTsnqe1FUmFFOEQ&usqp=CAU",
        publishTime: "2h Ago",
        postText: "Aplication development is a huge task Lorem ipag home the i alon year ago took the road the use voice chat in a clear sky and ",
        imageLink: "/vecteezy_background-Geometric_da1120.jpg",
        privacyState: "Public",
        privacyIndecator: privacyIconPublic
    },
    {
        author: 'Md Ibrahim',
        profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeBFEWYTDaK---LTY3SL_87tvC1R5KvmnGvA&usqp=CAU",
        publishTime: "8h Ago",
        postText: "Aplication  React Server Data is coming from hreredevelopment is a huge task Lorem ipag home the i alon year ago took the road the use voice chat in a clear sky and ",
        imageLink: "/vecteezy_abstract-blue-background-simple-design-for-your-website_6852804.jpg",
        privacyState: "Public",
        privacyIndecator: privacyIconPublic
    }
]

function MakeHeader() {
    return <>
    <div class="header">
        <h1> welcome to my site</h1>
        <p> A page with a touch of clean full responsive design</p>
    </div>
    </>
}

function createNavbarItem() {
    var holdNavLink = []
    for (var i in navBar) {
        holdNavLink.push(<a id="btn" href={navBar[i]} className='navlink'>{i}</a>)
    }
    return holdNavLink
}

function NavBar(props) {
    return <nav>
    <div className='navBox'>
    {createNavbarItem()}
    </div>
    </nav>
}

function createPost() {
    var holdPost = []
    posts.map((value) => {
        holdPost.push(
            <div class="post-container mb-[1.3rem] md:mb-0">
                <div class="title-box">
                    <img class="avater" src={value.profilePicture}/>
                    <div class='post-info'>
                        <h1> {value.author} </h1>
                        <p> {value.publishTime} • <i class={value.privacyIndecator}></i> {value.privacyState} </p>
                    </div>
                    <span class="icon fa fa-ellipsis-v">  </span>
                </div>
                <div class='post-text'>
                    {value.postText}
                </div>
                <div class="fake-image">
                    <img src={value.imageLink}/>
                </div>
                <div class='post-action-box'>
                    <button id='like' className="post-action">Like</button>
                    <button className="post-action">Comment</button>
                    <button className="post-action">Share</button>
                </div>
            </div>
        )
    })
    return holdPost.reverse()
}

function Post() {
    return <div class="md:grid grid-cols-2 gap-5 ">
    {createPost()}
    </div>
}
function Footer(){
    return <>
            <div>
                <img src="https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif" class="block m-auto w-1/3 md:w-1/4"/>
                <p class="text-gray-400 text-sm md:text-lg text-center -mt-4 md:-mt-7"> Wait as long as you can...</p>
            </div>
            <div class="w-full border text-md flex space-between rounded-full bg-white p-[1rem] my-[1rem]">
                <span class="text-gray-400 block w-full "> <i class=" fa fa-code"></i> Built With React.js </span>
                <div class="text-right text-lg w-full text-slate-700">
                    <i class="pr-2 fab fa-facebook"></i>
                    <i class="pr-2 fab fa-twitter"></i>
                    <i class="fab fa-youtube"></i>
                </div>
            </div>
            </>
    }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <MakeHeader/>
        <NavBar/>
        <Post/>
        <Footer/>
    </div>
)

