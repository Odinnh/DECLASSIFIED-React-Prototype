import styled from '@emotion/styled';
import React, { useRef } from 'react';
import { useFormContext } from 'react-hook-form';

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
`

// export const CustomIntelFilterCheckbox = ({ intelType }) => {
//     const imgSrc = (intelType).toLowerCase();

//     return (
//         <StyledCustomIntelFilterCheckbox>
//             <div className="container">
//                 <label>{intelType}</label>
//                 <img
//                     src={require(`../../../src/assets/img/intelTypes/${imgSrc}.png`)}
//                     alt='Placeholder'
//                     loading="lazy"
//                 />
//                 <div className="intel-count">
//                     10
//                     /105
//                 </div>
//             </div>
//         </StyledCustomIntelFilterCheckbox>
//     )
// }
function useCombinedRefs(...refs) {
    const targetRef = React.useRef();

    React.useEffect(() => {
        refs.forEach(ref => {
            if (!ref) return;

            if (typeof ref === "function") {
                ref(targetRef.current);
            } else {
                ref.current = targetRef.current;
            }
        });
    }, [refs]);

    return targetRef;
}

type RefType = {

}

type PropsType = {
    label, name, value, onChange, defaultChecked
}

export const CustomIntelFilterCheckbox = ({ name, defaultChecked }) => {
    const { register, trigger, getValues, setValue } = useFormContext();
    const imgSrc = (name).toLowerCase();
    const [checked, setChecked] = React.useState(defaultChecked || false);
    const checkbox = useRef<HTMLInputElement | null>(null);
    const { ref, ...rest } = register('intelTypes');

    // console.log({value});


    return (
        <>

            <input
                style={{ display: "none" }}
                key={name}
                type="checkbox"
                value={name}
                {...rest}
                ref={(e) => {
                    ref(e)
                    checkbox.current = e
                }}
                name={"intelTypes"}
            />
            <StyledCustomIntelFilterCheckbox onClick={() => {
                const isChecked = !checkbox.current!.checked;
                checkbox.current!.checked = isChecked

                setChecked(isChecked);
                const currentArray = getValues('intelTypes');
                console.log({ currentArray });

                if (isChecked) {
                    currentArray.push(name)
                    setValue('intelTypes', currentArray)
                }
                else {
                    const index = currentArray.indexOf(name);
                    if (index > -1) {
                        currentArray.splice(index, 1);
                    }
                    setValue('intelTypes', currentArray)
                }
            }} style={{ cursor: "pointer" }} >

                <div className={`container ${checked ? "checked" : ""}`}>
                    <label>{name}</label>
                    <img
                        src={require(`../../../src/assets/img/intelTypes/${imgSrc}.png`)}
                        alt='Placeholder'
                        loading="lazy"
                    />
                    <div className="intel-count">
                        10
                        /105
                    </div>
                </div>
            </StyledCustomIntelFilterCheckbox>
        </>
    );
}
