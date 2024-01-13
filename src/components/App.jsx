import React, {Component} from "react"; 
import Notification from "./Notification";
import Section from "./Section";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";

class App extends Component {

	state = {
		good: 0,
		neutral: 0,
		bad: 0
	}

	onClick = button => {
		this.setState((prevState => ({
			[button]: prevState[button] + 1,
		})))
	}

	countTotalFeedback = () => {
		return Object.values(this.state).reduce((total, el) => (total += el), 0);
	};

	countPositiveFeedbackPercentage = value => {
		return this.countTotalFeedback() 
		? Math.floor((value / this.countTotalFeedback()) * 100) 
		: 0;
	}

	render() {
		return (
			<>
				<Section title="Please leave feedback">
					<FeedbackOptions>
						onClick={this.onClick}
						feedbackOptions={this.state}
					</FeedbackOptions>
				</Section>
				<Section title="Statistics">
					{this.countTotalFeedback() !== 0 
					? (<Statistics feedbackOptions={this.state} 
					good={this.state.good}
					neutral={this.state.neutral}
					bad={this.state.bad}
					total={this.countTotalFeedback()}
					positivePercentage={this.countPositiveFeedbackPercentage(this.state.good)}></Statistics>) 
					: (<Notification message="There is no feedback"/>)}
				</Section>
			</>
		)
	} 
}

export default App;
