import React, { useState } from 'react';
import {Button, Grid, Typography, TextareaAutosize, TextField, FormControl, InputLabel
, Select, MenuItem} from '@mui/material';


export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        background: 'Student',
        message: '',
    });

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // Handle form submission here (e.g., send data to server)
        console.log(formData);
    };

    return (
        <Grid container spacing={4} sx={{padding: '80px 15vw 0'}}>
            <Grid item xs={12}>
                <Typography variant='h3' sx={{
                    fontWeight: 800,
                    color: '#333',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                    marginBottom: '20px',
                    paddingBottom: '5px',
                    textAlign: 'center'
                }}>Use the Form Below to Contact Us</Typography>
            </Grid>

            <Grid item xs={12} sx={{ marginBottom: '40px', flexDirection: 'row'}}>
                <form onSubmit={handleSubmit} style={{width: '100%'}}>
                    {/* Basic Contact Information */}
                    <TextField
                        label="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        variant="outlined"
                        required
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                        required
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Phone (optional)"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />

                    {/* Background Information */}
                    <FormControl variant="outlined" fullWidth margin="normal">
                        <InputLabel id="background-label">Your Background</InputLabel>
                        <Select
                            labelId="background-label"
                            label="Your Background"
                            name="background"
                            value={formData.background}
                            onChange={handleChange}
                        >
                            <MenuItem value="Student">Student</MenuItem>
                            <MenuItem value="Professional">Professional</MenuItem>
                            <MenuItem value="Educator">Educator</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Message */}
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        rows={4}
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                        required
                    />

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="large"
                    >
                        Submit
                    </Button>
                </form>
            </Grid>
        </Grid>
    )
}