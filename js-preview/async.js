//จำลองการรับข้อมูลจาก server
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function demo() {
    console.log("1) Start Loading...");
    await wait(2000);
    console.log("2) Loading Complete");
    await getPosts();
}

async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const posts = await response.json();
        console.log(`Get data ${posts.length}`);
        posts.forEach((p) => console.log(p.userId, p.id, p.title, "-", p.body));
    } catch (error) {
        console.error("Error Found : ", error);
    }
}

demo();
console.log("3) Show Data"); 
