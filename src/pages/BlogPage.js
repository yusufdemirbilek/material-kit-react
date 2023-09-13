import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import {  Container, Stack, Typography,Grid,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  OutlinedInput, } from '@mui/material';
// components
import { useTheme } from '@mui/material/styles';
import Iconify from '../components/iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
// mock

import POSTS from '../_mock/blog';

import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------

const projects = ['Sprint-1', 'Sprint-2', 'Sprint-3', 'Sprint-4', 'Sprint-5', 'Sprint-6'];
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
}


export default function BlogPage() {
  // Düzenlenecek
  const [openFilter, setOpenFilter] = useState(false);
  const theme = useTheme();
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const [projectName, setProjectName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setProjectName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  return (
    <>
      <Helmet>
        <title> Dashboard: Blog | Minimal UI </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Sprintler
          </Typography>
          {/* <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Post
          </Button> */}
        </Stack>

        <FormControl sx={{ m: 0, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Sprint Seç</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={projectName}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            // MenuProps={MenuProps}
          >
            {projects.map((project) => (
              <MenuItem key={project} value={project} style={getStyles(project, projectName, theme)}>
                {project}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div style={{ marginTop: '15px' }}> </div>


        <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title=""
              chartData={[
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

        {/* <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch posts={POSTS} />
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack>

        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid> */}
      </Container>
    </>
  );
}
