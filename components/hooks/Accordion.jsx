// Accordion.js

export default function Accordion(props) {
	// console.log("PROPSACC", props)
	return (
		<div className="border rounded-md mb-1">
			<button
				className="w-full p-4 text-right bg-gray-200
						hover:bg-gray-300 transition duration-300"
				onClick={props.toggleAccordion}
			>
				{props.title}
				<span className={`float-right transform ${props.isOpen ?
								'rotate-180' : 'rotate-0'}
								transition-transform duration-300`}>
					&#9660;
				</span>
			</button>
			{!props.isOpen && (
				<div className="p-4 bg-white-300">
				{
                        !props.descTrue ? (
							props.data.map((feature, index) => {

								return <ul key={index}>
									<li className="flex py-2 gap-2 justify-start items-center">
										<span>{feature.icon}</span><span className={(feature.important ? 'font-bold' : 'font-light') + ' ' + (feature.border ? ' border border-solid px-4 py-2 rounded-xl border-black' : '')}>{feature.title}</span>
									</li>
								</ul>
							})
						) : (
							<span>{props.data}</span>
						)
                    }

				</div>
			)}
         
		</div>
	);
};
