import useMidi from '../hooks/useMIDI';

function Devices() {
	const { midiDevices, midiData } = useMidi();

	return (
		<div>
			<h2>MIDI Devices</h2>
			<ul>
				{midiDevices.map((device, index) => (
					<li key={index}>{device.name}</li>
				))}
			</ul>
			<h3>Latest MIDI Data:</h3>
			{midiData ? (
				<p>
					Status: {midiData.status}, Data1 (Note): {midiData.data1}, Data2 (Velocity):{' '}
					{midiData.data2}
				</p>
			) : (
				<p>No MIDI data received yet.</p>
			)}
		</div>
	);
}

export default Devices;
