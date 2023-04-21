import { useState, useEffect } from 'react';
import styles from './MasterBinaryClock.module.scss';

const numberToBinary = (base10Number) => {
  const base2Values = [8, 4, 2, 1];
  const output = [0, 0, 0, 0];
  let remainder = base10Number;
  base2Values.forEach((val, idx) => {
    const left = remainder - val;
    if (left >= 0) {
      output[idx] = 1;
      remainder = left;
    }
  });
  return output;
};

const numberAsBinaryArrayPair = (number) => {
  const pair = [];
  if (number < 10) {
    pair[0] = numberToBinary();
    pair[1] = numberToBinary(number);
  } else {
    const numberAsArray = String(number).split('');
    pair[0] = numberToBinary(parseInt(numberAsArray[0], 10));
    pair[1] = numberToBinary(parseInt(numberAsArray[1], 10));
  }
  return pair;
};

function Pip({ isOn }) {
  return (
    <div className={`${styles.pip} ${isOn ? styles.pip__on : ''}`} />
  );
}

function BinaryDigit({ base2NumberAsArray }) {
  return (
    <div className={styles.binary_digit}>
      {base2NumberAsArray.map((pip, id) => <Pip key={id} isOn={pip === 1} />)}
    </div>
  );
}

function BinaryDigitGroup({ group }) {
  return (
    <div className={styles.binary_digit_group}>
      {group.map((binaryDigit, id) => <BinaryDigit key={id} base2NumberAsArray={binaryDigit} />)}
    </div>
  );
}

export default function MasterBinaryClock({ currentTime }) {
  const [digits, setDigits] = useState([[], [], []]);
  useEffect(() => {
    if (currentTime) {
      const newDigits = [
        numberAsBinaryArrayPair(currentTime.getHours()),
        numberAsBinaryArrayPair(currentTime.getMinutes()),
        numberAsBinaryArrayPair(currentTime.getSeconds()),
      ];
      setDigits(newDigits);
    }
  }, [currentTime]);

  return (
    <div className={styles.clock}>
      {digits.map((digit, id) => <BinaryDigitGroup key={id} group={digit} />)}
    </div>
  );
}
