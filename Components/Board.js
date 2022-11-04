import React, {useState} from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';
const Board = props => {
  const [squares, setSquares] = useState(Array(9).fill(' '));
  const [history, setHistory] = useState(Array());
  const [current, setCurrent] = useState(-1);
  const [xNext, setxNext] = useState(true);

  function handleClick(i) {
    //can only add moves if up to date
    if (current == history.length - 1) {
      const s = squares.slice();
      s[i] = xNext ? 'X' : 'O';
      setSquares(s);
      setxNext(!xNext);
      setHistory(history.concat([s]));
      setCurrent(current + 1);
    }
  }
  function handleHist(forward) {
    if (history.length == 1 || history.length == 0) {
      return;
    }
    //setState is not immedate, use temp var and setState at end
    let next = forward ? current + 1 : current - 1;
    //bound next to (0,history.length)
    next = Math.max(0, Math.min(next, history.length - 1));
    setSquares(history[next]);
    setCurrent(next);
  }
  function getStatus() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] !== ' ' &&
        squares[a] == squares[b] &&
        squares[a] == squares[c]
      ) {
        return <Text>GAME OVER: {squares[lines[i][0]]} WINS</Text>;
      }
    }
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] == ' ') {
        return <Text>Player Turn: {xNext ? 'X' : 'O'}</Text>;
      }
    }
    return <Text>GAME OVER: TIE</Text>;
  }
  return (
    <View style={styles.board}>
      {getStatus()}
      <View style={styles.boardRow}>
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </View>
      <View style={styles.boardRow}>
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </View>
      <View style={styles.boardRow}>
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </View>
      <Text style={styles.labelText}>History (must be up to date to play)</Text>
      <View style={styles.boardRow}>
        <Button title="Go Back" onPress={() => handleHist(false)} />
        <Button title="Go Forward" onPress={() => handleHist(true)} />
      </View>
    </View>
  );
};

const Square = props => {
  return (
    <View style={styles.square}>
      <Button
        onPress={() => {
          props.onClick();
        }}
        title={props.value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    borderWidth: 1,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    margin: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boardRow: {
    flexDirection: 'row',
  },
  board: {
    alignItems: 'center',
  },
  labelText: {
    alignSelf: 'center',
  },
});

export default Board;
