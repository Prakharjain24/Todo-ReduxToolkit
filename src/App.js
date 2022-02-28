import { Container, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import theme from "./theme";
import Students from "./components/students/students";
import StudentProfile from "./components/students/studentProfile";
import AddStudent from "./components/students/addStudent";
// import EditStudent from "./components/students/EditStudent";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Routes>
            <Route exact path="/" element={<Students />} />
            <Route exact path="/students/create" element={<AddStudent />} />
            <Route exact path="/students/:id" element={<StudentProfile />} />
            {/* <Route exact path="/students/:id/edit" element={EditStudent} /> */}
          </Routes>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
