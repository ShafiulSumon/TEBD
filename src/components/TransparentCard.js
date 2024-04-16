function TransparentCard({title, image}) {
    return (
        <div className="flex flex-col bg-pink-200">
            <img src={image} alt="Photo" width={180} height={100}/>
            <span>{title}</span>
        </div>
    );
}

export default TransparentCard;