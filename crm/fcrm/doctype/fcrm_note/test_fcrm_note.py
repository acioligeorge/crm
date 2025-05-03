# Copyright (c) 2023, Frappe Technologies Pvt. Ltd. and Contributors
# See license.txt

# import frappe
from frappe.tests import UnitTestCase
from crm.fcrm.doctype.fcrm_note.fcrm_note import FCRMNote


class TestFCRMNote(UnitTestCase):
	def test_create_note(self):
		# Create a new FCRMNote instance and test basic attributes
		note = FCRMNote()
		note.content = "Test note content"
		self.assertEqual(note.content, "Test note content")
