import { Search } from "@mui/icons-material";
import { AppBar, Box, InputBase, Toolbar, Typography } from "@mui/material";
import { Autocomplete } from "@react-google-maps/api";

const Header = () => {

  return (
    <AppBar position="relative">
      <Toolbar className="flex justify-between bg-indigo-600">
        <Typography variant="h5" className="hidden sm:block">
          Travel Advisor
        </Typography>
        <Box display={"flex"}>
          <Typography variant="h6" className="hidden sm:block">
            Explore new places
          </Typography>
          {/* <Autocomplete> */}
            <div className="relative rounded bg-white/70 hover:bg-opacity-25 mr-2 ml-0 w-full sm:ml-3 sm:w-auto">
              <div className="p-2 h-full absolute pointer-events-none flex items-center justify-center z-50">
                <Search />
              </div>
              <InputBase placeholder="Search..." className="!text-white pl-10" />
            </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
