import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function TeamCard({ img, name, position, socials }) {
  return (
    <Card
      color="transparent"
      className="mb-5 font-bold text-gray-900 p-4 w-64 md:w-72 lg:w-93 mx-auto"
      style={{
        backgroundColor: `#a8cef4`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        boxShadow: '9px 4px 1px -1px rgba(0, 0, 0, 0.2)',
      }}
    >
      <div className="text-center">
        <Avatar
          src={img}
          alt={name}
          
          variant="rounded"
          className="shadow-md mb-3 xl-auto"
          style={{ width: '230px', height: '200px',boxShadow: '0px 4px 2px 2px rgba(0, 0, 0, 0.2)' }}
        />
        <Typography variant="h5" color="blue-gray" className="mb-2 text-lg font-bold">
          {name}
        </Typography>
        {position && (
          <Typography variant="body" className="text-gray-800 font-normal text-base">
            {position}
          </Typography>
        )}
      </div>
    </Card>
  );
}

TeamCard.defaultProps = {
  position: "",
  socials: null,
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
