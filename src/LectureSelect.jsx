function LectureSelect() {
<div>
          {lectures.map((lecture)=> {
            return <button type='button' onClick={toggleLecture} className={activeLectures.includes(lecture.id) ? "bg-primary" : ""} id={lecture.id} key={lecture.id}>
              {lecture.title}
            </button>
          })}
        </div>
        }
        export default LectureSelect