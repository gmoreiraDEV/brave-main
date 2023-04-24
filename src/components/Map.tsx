export default function Map() {
    return (
        <div className="w-full h-full max-h-[576px] ml-12 bg-brand-primary overflow-hidden rounded-lg z-0">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1607300040027!2d-46.658464323671296!3d-23.562670161642185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c92a3b5939%3A0xd80224e64ad3f154!2sAv.%20Paulista%2C%201471%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001311-200!5e0!3m2!1spt-BR!2sbr!4v1682343674291!5m2!1spt-BR!2sbr"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[576px]"
            ></iframe>
        </div>
    );
}
