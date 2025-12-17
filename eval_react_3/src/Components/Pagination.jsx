export default function Pagination({ pageCount, setPage }) {

    const showPageButton = () => {
        let buttonHtml = [];
        for (let i = 1; i <= pageCount; i++) {
            buttonHtml.push(i);
        }
        return buttonHtml;
    }
    return (
        <div className=''>
            {showPageButton().map(button => <button onClick={() => { setPage(button) }}>{button}</button>)}
        </div>
    )
}