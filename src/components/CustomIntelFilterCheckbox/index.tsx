import styled from '@emotion/styled';
import React, { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { IntelType } from '../../data/intel';

export const CustomIntelFilterCheckbox = ({ name, defaultChecked }) => {
	const { register, getValues, setValue } = useFormContext();
	const imgSrc = name.toLowerCase();
	const value = IntelType[name];
	let [checked, setChecked] = React.useState(defaultChecked || false);
	const checkbox = useRef<HTMLInputElement | null>(null);
	const { ref, ...rest } = register('intelTypes');

	return (
		<>
			<input
				style={{ display: 'none' }}
				key={value}
				type="checkbox"
				value={value}
				{...rest}
				ref={e => {
					ref(e);
					checkbox.current = e;
				}}
				name={'intelTypes'}
			/>
			<StyledCustomIntelFilterCheckbox
				onClick={() => {
					const isChecked = !checkbox.current!.checked;
					checkbox.current!.checked = isChecked;
					setChecked(isChecked);
					const currentArray = getValues('intelTypes');

					if (isChecked) {
						currentArray.push(value);
						setValue('intelTypes', currentArray);
					} else {
						const index = currentArray.indexOf(value);
						if (index > -1) {
							currentArray.splice(index, 1);
						}
						setValue('intelTypes', currentArray);
					}
				}}
				style={{ cursor: 'pointer' }}
			>
				<div className={`container ${checked ? 'checked' : ''}`}>
					<label>{name}</label>
					<img
						src={require(`../../../src/assets/img/intelTypes/${imgSrc}.png`)}
						alt="Placeholder"
						loading="lazy"
					/>
					<div className="intel-count">10 /105</div>
				</div>
			</StyledCustomIntelFilterCheckbox>
		</>
	);
};

const StyledCustomIntelFilterCheckbox = styled.div`
	padding: 5px;
	.container {
		background-color: var(--clr-white-d);
		display: grid;
		grid-template-columns: 40% 40% 20%;
		justify-items: center;
		align-items: center;
	}
	label {
		background-color: var(--clr-grey-d);
		color: var(--clr-white-d);
		padding: 0.2rem;
		width: 100%;
		text-align: center;
	}
	img {
		width: 100%;
		padding: 0.2rem;
	}
	.intel-count {
		font-size: initial;
		background-color: var(--clr-white);
		text-align: center;
		height: 100%;
		display: flex;
		align-items: center;
		padding: 0.2rem;
	}
	.checked {
		outline: 3px solid var(--clr-yellow);
	}
`;