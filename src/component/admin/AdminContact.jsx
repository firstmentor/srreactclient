import React, { useState } from 'react';
import {
  useGetContactsQuery,
  useBulkDeleteContactsMutation,
} from '../../features/contact/contactApi';
import { toast } from 'react-toastify';

function AdminContact() {
  const { data: contactsData, isLoading } = useGetContactsQuery();
  const [bulkDeleteContacts] = useBulkDeleteContactsMutation();
  const [selectedIds, setSelectedIds] = useState([]);

  // ✅ Select contact checkbox
  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // ✅ Bulk delete
  const handleBulkDelete = async () => {
    if (selectedIds.length === 0) return alert("Select contacts to delete.");
    if (window.confirm("Are you sure to delete selected contacts?")) {
      try {
        await bulkDeleteContacts(selectedIds).unwrap();
        toast.success("Deleted selected contacts");
        setSelectedIds([]);
      } catch {
        toast.error("Bulk delete failed");
      }
    }
  };

  return (
    <div className="container py-4">
      <h3>📨 Contact Messages</h3>

      {/* ✅ Bulk Delete Button */}
      <div className="text-end mb-3">
        <button
          className="btn btn-danger"
          onClick={handleBulkDelete}
          disabled={selectedIds.length === 0}
        >
          Delete Selected
        </button>
      </div>

      {/* ✅ Contact Table */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>
                  {/* Checkbox column */}
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        const allIds = contactsData.data.map((c) => c._id);
                        setSelectedIds(allIds);
                      } else {
                        setSelectedIds([]);
                      }
                    }}
                    checked={
                      contactsData?.data?.length > 0 &&
                      selectedIds.length === contactsData.data.length
                    }
                  />
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {contactsData?.data?.map((contact) => (
                <tr key={contact._id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(contact._id)}
                      onChange={() => handleSelect(contact._id)}
                    />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.subject}</td>
                  <td>{contact.comments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminContact;
