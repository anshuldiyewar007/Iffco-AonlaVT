import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const { AuthorizationToken } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/contacts`, {
        method: "GET",
        headers: { Authorization: AuthorizationToken },
      });
      const data = await response.json();
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteContactById = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: { Authorization: AuthorizationToken },
      });
      if (response.ok) {
        getContactsData();
        toast.success("Contact deleted successfully");
      } else {
        toast.error("Failed to delete contact");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Admin Contact Data</h1>
        <p className="mt-2 text-lg text-gray-600">Manage the contact requests from users.</p>
      </div>

      <div className="container mx-auto bg-white rounded-lg shadow-lg p-8">
        {contactData.length > 0 ? (
          contactData.map((contact) => (
            <div key={contact._id} className="border-b py-4">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <p className="text-lg font-medium text-gray-800">{contact.username}</p>
                  <p className="text-gray-600">{contact.email}</p>
                  <p className="text-gray-500 mt-2">{contact.message}</p>
                </div>
                <button
                  onClick={() => deleteContactById(contact._id)}
                  className="text-red-600 hover:text-red-800 font-semibold mt-4"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No contacts available.</div>
        )}
      </div>
    </section>
  );
};
