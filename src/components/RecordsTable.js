import React, { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  InputAdornment,
  Typography,
  Container,
  CssBaseline,
  AppBar,
  Toolbar,
  Button,
  Checkbox,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';

const studentData = [
  { id: 1, firstName: 'Ashutosh', lastName: 'Dash', email: 'ashutosh@gmail.com', contactNo: '123-456-7890' },
  { id: 2, firstName: 'Ajay', lastName: 'Kumar', email: 'ajay@example.com', contactNo: '987-654-3210' },
  { id: 3, firstName: 'Barsha', lastName: 'Priya', email: 'barsha@example.com', contactNo: '555-123-4567' },
  { id: 4, firstName: 'Ananya', lastName: 'Sharma', email: 'ananya@example.com', contactNo: '777-888-9999' },
  { id: 5, firstName: 'Om', lastName: 'Pandey', email: 'om@example.com', contactNo: '333-222-1111' },
];

const StudentTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const filteredStudents = studentData.filter((student) =>
    student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.contactNo.includes(searchTerm)
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCheckboxChange = (event, id) => {
    if (event.target.checked) {
      setSelectedRows([...selectedRows, id]);
    } else {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    }
  };

  const handleDeleteClick = () => {
    // Filter out the selected rows and update the data
    const updatedData = studentData.filter((student) => !selectedRows.includes(student.id));
    studentData.length = 0; // Clear the original array
    studentData.push(...updatedData); // Update with filtered data
    setSelectedRows([]); // Clear selected rows
  };

  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Student Table</Typography>
          <div style={{ marginLeft: 'auto', marginTop: '130px'}}>
            <TextField
              label="Search"
              variant="outlined"
              size="small"
              value={searchTerm}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={handleDeleteClick}
            sx={{ color: 'red' }}
          >
            Delete
          </Button>
        </Toolbar>
      </AppBar>
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell> {/* Empty cell for checkboxes */}
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Contact No.</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedRows.includes(student.id)}
                    onChange={(e) => handleCheckboxChange(e, student.id)}
                  />
                </TableCell>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.firstName}</TableCell>
                <TableCell>{student.lastName}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.contactNo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default StudentTable;
