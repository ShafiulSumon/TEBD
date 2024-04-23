function TransparentCard({title, image}) {
    return (
        <div className="flex flex-col w-48">
            <img src={image} alt="Photo" width={180} height={100}/>
            <span className="pt-4 text-wrap text-center text-xl font-extralight">{title}</span>
        </div>
    );
}

export default TransparentCard;