import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';

import {
  Grid,
  Button,
  Container,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  OutlinedInput,
} from '@mui/material';

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
// components
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';

// ----------------------------------------------------------------------
const projects = ['ESBİS', 'TÜBİS', 'E-GARANTİ', 'TÜKETİCİ PORTALI', 'GÜBİS', 'MERSİS'];
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
}
export default function ProductsPage() {
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
        <title> Projeler </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Projeler
        </Typography>

        {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack> */}

        {/* <ProductList products={PRODUCTS} />
        <ProductCartWidget /> */}

        <FormControl sx={{ m: 0, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Proje Seç</InputLabel>
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
      </Container>
    </>
  );
}
