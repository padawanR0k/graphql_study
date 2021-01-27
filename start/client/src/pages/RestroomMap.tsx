import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { gql } from '@apollo/client/core';
import { useQuery } from '@apollo/client/react/hooks/useQuery';

interface RestroomProps extends RouteComponentProps { }

export const GET_RESTROOM = gql`
  query GetLaunchList($after: String) {
    launches(after: $after) {
      cursor
      hasMore
      launches {
        ...LaunchTile
      }
    }
  }
`;
  // # ${LAUNCH_TILE_DATA}

const Restroom: React.FC<RestroomProps> = () => {
	const {
		data,
		loading,
		error,
		fetchMore
	} = useQuery<
		GetLaunchListTypes.GetLaunchList,
		GetLaunchListTypes.GetLaunchListVariables
	>(GET_RESTROOM);
	return <div />;
}

export default Restroom;