// src/components/S3FileList.tsx

import React, { useEffect, useState } from 'react';
import { Auth, Storage } from 'aws-amplify';

function S3FileList() {
  const [folders, setFolders] = useState<string[]>([]);
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        // Get current authenticated user
        const user = await Auth.currentAuthenticatedUser();
        const email = user.attributes.email;
        setUsername(email);

        // List folders in S3 with the prefix of the user's email
        const result = await Storage.list(`${email}/`, { level: 'private' });
        const folderNames = result.map((item) => item.key);
        setFolders(folderNames);
      } catch (error) {
        console.error('Error fetching folders:', error);
      }
    };

    fetchFolders();
  }, []);

  return (
    <div>
      <h1>Hello, {username}</h1>
      <h2>Your Folders in S3:</h2>
      <ul>
        {folders.length > 0 ? (
          folders.map((folder, index) => <li key={index}>{folder}</li>)
        ) : (
          <li>No folders found</li>
        )}
      </ul>
    </div>
  );
}

export default S3FileList;
