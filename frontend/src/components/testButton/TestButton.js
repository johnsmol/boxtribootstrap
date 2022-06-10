import "./TestButton.css";

const TestButton = () => {
	function getTest() {
		console.log("click");
        const response = fetch("/test");
		console.log(response);
	}

	return (
		<div className="TestButton">
			<button onClick={() => getTest()}>TEST</button>
		</div>
	);
};

export default TestButton;
