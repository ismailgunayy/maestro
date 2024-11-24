import { useEffect, useRef, useState } from 'react';
import { MIDIMessage } from '../types/MIDIMessage.type';

const useMidi = () => {
	const [midiDevices, setMidiDevices] = useState<MIDIInput[]>([]);
	const [midiMessage, setMidiMessage] = useState<MIDIMessage>();
	const midiDevicesRef = useRef<MIDIInput[]>([]);

	useEffect(() => {
		const requestMIDIAccess = async () => {
			if (navigator.requestMIDIAccess) {
				try {
					const midiAccess = await navigator.requestMIDIAccess();

					const devices = Array.from(midiAccess.inputs.values());
					setMidiDevices(devices);
					midiDevicesRef.current = devices;

					devices.forEach((device) => {
						device.onmidimessage = (message) => {
							console.log(message.data);

							const [status, data1, data2] = message.data;
							setMidiMessage({ status, data1, data2 });
						};
					});
				} catch (error) {
					console.error('MIDI Access failed', error);
				}
			} else {
				console.log('Web MIDI API is not supported in this browser.');
			}
		};

		requestMIDIAccess();

		return () => {
			midiDevicesRef.current.forEach((device) => {
				device.onmidimessage = null;
			});
		};
	}, []);

	return { midiDevices, midiData: midiMessage };
};

export default useMidi;
