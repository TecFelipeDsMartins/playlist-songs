import { useState } from 'react'

const AddTrack = (props) => {
  const [ form, setForm ] = useState({
    songName: "",
    movieTitle: "",
    duration: ""
  })

  const handleOnInputChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleOnSubmit = () => {
    props.addSong({songName: "Deus é Fiel", movieTitle: "Cinema de Deus", duration: "3:45"})
  }

  return ( 
    <div className="add-track-form">
      <h2>Add new track</h2>
      
      <div className="form-input">
        <label htmlFor="songName">Song Name</label>
        <input 
          name="songName" 
          type="text" 
          placeholder="song name"
          value={form.songName}
          onChange={handleOnInputChange}
          />
      </div>

      <div className="form-input">
        <label htmlFor="movieName">Movie Title</label>
        <input 
          name="movieTitle" 
          type="text" 
          placeholder="Movie Title"
          value={form.movieTitle}
          onChange={handleOnInputChange}
          />
      </div>

      <div className="form-input">
        <label htmlFor="duration">Duration in Seconds</label>
        <input 
          name="duration" 
          type="number"
          value={form.duration}
          onChange={handleOnInputChange}
          />
      </div>

      <button className="btn submit" onClick={handleOnSubmit}>
        save
      </button>
    </div>
   );
}
 
export default AddTrack;