import Devices from './components/Devices';
import Keyboard from './components/Keyboard';
import styles from './styles/App.module.scss';

function App() {
	return (
		<div className={styles.app}>
			<Keyboard octave={2} />
			{/* <div className={styles.devicesContainer}>
				<Devices />
			</div> */}
		</div>
	);
}

export default App;
