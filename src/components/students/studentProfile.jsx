import { useEffect } from "react";
import { Paper, Typography } from "@material-ui/core";
import { getStudent, clearStudentData } from "../../features/studentSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const StudentProfile = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudent(params.id));
    return () => {
      dispatch(clearStudentData());
    };
  }, []);

  const selectProfile = useSelector((state) => state.student.studentProfile);
  console.log(888, selectProfile);

  return (
    <Paper>
      <Typography variant="h2" gutterBottom>
        {selectProfile.firstName} {selectProfile.lastName}
      </Typography>

      <Typography variant="h5" gutterBottom>
        {selectProfile.phone}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {selectProfile.email}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {selectProfile.address}
      </Typography>
    </Paper>
  );
};

export default StudentProfile;
