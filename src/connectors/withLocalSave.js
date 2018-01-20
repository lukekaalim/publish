import { connect } from 'react-redux';
import { saveAs } from 'file-saver';

console.log(saveAs);

const mapStateToProps = (state) => ({
  game: state.game,
});

const WithLocalSave = ({ render, game }) => (
  render(
        () => saveAs(
            new Blob([JSON.stringify(game, null, 2)], {type: "text/plain;charset=utf-8"}),
            'game.json',
        )
    )   
);

export default connect(mapStateToProps)(WithLocalSave)
