import styles from '../styles/components/Keyboard.module.scss';

import * as _ from 'lodash';

type KeyboardProps = {
	octave: number;
};

function Keyboard({ octave }: KeyboardProps) {
	return (
		<div
			className={styles.container}
			style={{ '--octave-count': octave } as React.CSSProperties}
		>
			<div className={styles.keyboard}>
				{_.times(octave).map((o) => {
					return (
						<div
							className={styles.octave}
							key={o}
						>
							<div className={styles.whiteKeyContainer}>
								<div className={styles.whiteKey}></div>
								<div className={styles.whiteKey}></div>
								<div className={styles.whiteKey}></div>
								<div className={styles.whiteKey}></div>
								<div className={styles.whiteKey}></div>
								<div className={styles.whiteKey}></div>
								<div className={styles.whiteKey}></div>
							</div>
							<div className={styles.blackKeyContainer}>
								<div className={styles.blackKey}></div>
								<div className={styles.blackKey}></div>
								<div className={styles.blackKey}></div>
								<div className={styles.blackKey}></div>
								<div className={styles.blackKey}></div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Keyboard;
