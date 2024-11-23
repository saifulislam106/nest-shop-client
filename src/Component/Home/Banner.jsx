

const Banner = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg?t=st=1731563767~exp=1731567367~hmac=cef8eae0bd56b0bdd5a6de6bc4226bae79c46f07ac0e8bd20c128b4c5055603f&w=996)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome Our NestShop</h1>
                    <p className="mb-5">
                    Your one-stop online destination for gadgets. seamless shopping with fast delivery, secure checkout, and exceptional customer support.
                    </p>
                    <button className="btn bg-green-500">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;