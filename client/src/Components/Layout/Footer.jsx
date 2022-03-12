export default function Footer() {
    return (
        <footer
            className=" bg-emerald-500 text-emerald-100 p-4 fixed w-full bottom-0 text-center"
        >
            {/* Link to GitHub Repo */}
            <a
                href="https://github.com/ImmanuelCurrah/Tidy_The_Hack_Up_Team_Thunder"
                target="_blank"
                rel="noreferrer"
            >
                {/* Animates on hover and clicking */}
                <h4
                    className = "transform transition hover:-translate-y-1 hover:text-emerald-200  focus:outline-none focus:ring focus:ring-offset-2 focus:ring-emerald-100 focus:ring-opacity-50 active:text-lime-50"
                >
                    Team Thunder 2022
                </h4>
            </a>
        </footer>
    )
}
