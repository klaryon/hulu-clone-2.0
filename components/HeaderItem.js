const HeaderItem = ({Icon, title}) => {
    return (
        <div>
            <Icon className="h-8"/>
            <p>{title}</p>
        </div>
    )
}

export default HeaderItem
