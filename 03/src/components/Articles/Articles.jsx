import Article from "./Article";

function Articles({data}) {
    return(
        <>
            {data.map((item, i) => (
                <Article key={i} item={item} />
            ))}
        </>
    );
}

export default Articles;